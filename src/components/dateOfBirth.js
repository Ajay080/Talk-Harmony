$(document).ready(function() {
    $('.datepicker').pickadate({
      formatSubmit: 'dd-mm-yyyy',
      min: [2016,12,17],
      max: [2017,01,15],
      closeOnSelect: false,
      closeOnClear: false,
    })});