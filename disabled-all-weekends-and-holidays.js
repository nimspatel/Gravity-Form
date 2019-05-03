/* ====================================================
* We need to edit the date pick on the Tour Page here. We are using Gravity Forms on this page. Currently any date can be selected, we need to disable ALL weekends and major holidays, so they cannot be selected with the date picker.
* ----------------------------------------------------
* These Dates for Holidays need to be disabled:
* Tuesday, January 1 - New Year’s Day
* Monday, January 21 - Birthday of Martin Luther King, Jr.
* Monday, February 18 - Washington’s Birthday
* Monday, May 27 - Memorial Day
* Thursday, July 4 - Independence Day
* Monday, September 2 - Labor Day
* Monday, October 14 - Columbus Day
* Monday, November 11 - Veterans Day
* Thursday, November 28 - Thanksgiving Day
* Wednesday, December 25 -Christmas Day
 * ====================================================*/

gform.addFilter( 'gform_datepicker_options_pre_init', function( optionsObj, formId, fieldId ) {
	if ( formId == 10 && fieldId == 9 ) {
		optionsObj.firstDay = 1;
		optionsObj.beforeShowDay = function(date) {
		var day = date.getDay();
		var array = ["01-01","01-21","02-18","05-27","07-04","09-02","10-14","11-11","11-28","12-25"];
        var string = jQuery.datepicker.formatDate('mm-dd', date);
        return [ !(array.indexOf(string) != -1 || day == 0 || day == 6) ];
		}
	}
	return optionsObj;
});
