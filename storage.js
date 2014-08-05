/*		
 * storage.js
 * Copyright (c) 2014 yuch4n
 * Released under the MIT license.
 * version: 0.02 
 * update : 2014/05/18
 */

var Storage = {

	// Local Storage
	writeLocalStorage: function(key, value) {
		if(!this.checkLocalStorage) return false;
		if(key && value) {
			if(typeof value === 'object' && value instanceof Array)
				value = JSON.stringify(value);
			localStorage.setItem(key, value);
		}
	},

	loadLocalStorage: function(key) {
		if(!this.checkLocalStorage) return false;
		if(key) {
			var value = localStorage.getItem(key);
			if(value == null) return false;
			if(value.charAt(0) == '[' || value.charAt(0) == '{')
				value = JSON.parse(value);
			return value;
		}
	},

	deleteLocalStorage: function(key) {
		if(!this.checkLocalStorage) return false;
		if(key) localStorage.removeItem(key);
	},

	checkLocalStorage: function() {
		if(typeof localStorage === 'undefined') {
			return false;
		} else {
			return true;
		}
	},


	// Session Storage
	writeSessionStorage: function(key, value) {
		if(!this.checkSessionStorage) return false;
		if(key && value) {
			if(typeof value === 'object' && value instanceof Array)
				value = JSON.stringify(value);
			sessionStorage.setItem(key, value);
		}
	},

	loadSessionStorage: function(key) {
		if(!this.checkSessionStorage) return false;
		if(key) {
			var value = sessionStorage.getItem(key);
			if(value == null) return false;
			if(value.charAt(0) == '[' || value.charAt(0) == '{')
				value = JSON.parse(value);
			return value;
		}
	},

	deleteSessionStorage: function(key) {
		if(!this.checkSessionStorage) return false;
		if(key) sessionStorage.removeItem(key);
	},

	checkSessionStorage: function() {
		if(typeof sessionStorage === 'undefined') {
			return false;
		} else {
			return true;
		}
	},

}
