/*
 * Copyright (C) 2011-2013 sMap Project and its contributors.
 * See the NOTICE file for details.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



sMap.Events = OpenLayers.Class(OpenLayers.Events, {
	
	initialize : function() {
		OpenLayers.Events.prototype.initialize.apply(this, arguments);
	},
	
    /**
     * Make sure an object cannot bind the same function more than
     * once to the same event type.
     * 
     * @param type {String}
     * @param obj {Object}
     * @param func {Function}
     * @returns {Boolean}
     */
    funcBoundToEvent : function(type, obj, func) {
    	var listeners = this.listeners[type],
    		regFunc = null,
    		func = func.toString(),
    		className = obj.CLASS_NAME ? obj.CLASS_NAME : null,
    		regObj = null,
    		regClassName = null,
    		sameFuncs = null;
    	for (var i=0,len=listeners.length; i<len; i++) {
    		regFunc = listeners[i].func;
    		regObj = listeners[i].obj;
    		regClassName = regObj.CLASS_NAME ? regObj.CLASS_NAME : null;
    		sameFuncs = regFunc.toString() == func;
    		if (className && regClassName && className === regClassName
    				&& sameFuncs) {
    			return true;
    		}
    	}
    	return false;
    },
	
	/**
     * APIMethod: triggerEvent
     * Trigger a specified registered event.  
     * 
     * Parameters:
     * type - {String} 
     * evt - {Event}
     *
     * Returns:
     * {Boolean} The last listener return.  If a listener returns false, the
     *     chain of listeners will stop getting called.
     */
    triggerEvent: function (type, callerObj, evt) {
        var listeners = this.listeners[type];

        // fast path
        if(!listeners || listeners.length == 0) {
            return undefined;
        }

        // prep evt object with object & div references
        if (evt == null) {
            evt = {};
        }
        evt.object = this.object;
        evt.element = this.element;
        if(!evt.type) {
            evt.type = type;
        }
        evt.caller = callerObj;        
    
        // execute all callbacks registered for specified type
        // get a clone of the listeners array to
        // allow for splicing during callbacks
        listeners = listeners.slice();
        var continueChain;
        for (var i=0, len=listeners.length; i<len; i++) {
            var callback = listeners[i];
            // bind the context to callback.obj
            continueChain = callback.func.apply(callback.obj, [evt]);

            if ((continueChain != undefined) && (continueChain == false)) {
                // if callback returns false, execute no more callbacks.
                break;
            }
        }
        // don't fall through to other DOM elements
        if (!this.fallThrough) {           
            OpenLayers.Event.stop(evt, true);
        }
        return continueChain;
    },
	
	CLASS_NAME : "sMap.Events"
});