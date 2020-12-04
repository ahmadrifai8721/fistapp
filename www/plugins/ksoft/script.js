//Initialize elemets
$(function () {
  //Initialize Select2 Elements
  $('.select2').select2();
  $('.select2-multiple').select2({
    tags: true,
  });
  /* jQueryKnob */

  $('.knob').knob({
    readOnly: true,
    /*change : function (value) {
     //console.log("change : " + value);
     },
     release : function (value) {
     console.log("release : " + value);
     },
     cancel : function () {
     console.log("cancel : " + this.value);
     },*/
    draw: function () {

      // "tron" case
      if (this.$.data('skin') == 'tron') {

        var a = this.angle(this.cv) // Angle
          ,
          sa = this.startAngle // Previous start angle
          ,
          sat = this.startAngle // Start angle
          ,
          ea // Previous end angle
          ,
          eat = sat + a // End angle
          ,
          r = true

        this.g.lineWidth = this.lineWidth

        this.o.cursor &&
          (sat = eat - 0.3) &&
          (eat = eat + 0.3)

        if (this.o.displayPrevious) {
          ea = this.startAngle + this.angle(this.value)
          this.o.cursor &&
            (sa = ea - 0.3) &&
            (ea = ea + 0.3)
          this.g.beginPath()
          this.g.strokeStyle = this.previousColor
          this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sa, ea, false)
          this.g.stroke()
        }

        this.g.beginPath()
        this.g.strokeStyle = r ? this.o.fgColor : this.fgColor
        this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sat, eat, false)
        this.g.stroke()

        this.g.lineWidth = 2
        this.g.beginPath()
        this.g.strokeStyle = this.o.fgColor
        this.g.arc(this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false)
        this.g.stroke()

        return false
      }
    }
  })
  /* END JQUERY KNOB */
})

// //actions knob input inv
// data1 = 0
// // $('#name_item').keyup(function (e) { 
// //  console.log('oke' + data1)
// //  data1 = data1 + count()
// //  $('.knob-place').val(data1).trigger('change');
// // });

// if( !$('#name_item').val() ){

// }else{
//   console.log('oke' + data1)
//   $('.knob-place').val(data1).trigger('change');
// }
// function count() {
// return 25;
// }
// function int() {
// return data1;
// }


// link value

$('#name_item').keyup(function (e) {
  name = $('#name_item').val()
  $('#name_item_dtl').val(name);

})
