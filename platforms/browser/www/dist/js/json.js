$(function () {
  $('.select2-multiple2').select2({
    tags: true,
  })
  //code item change start
  $("#code_item").change(function (e) {

    $.getJSON("../dist/sample.json", function (data) {
      $.each(data.data_item, function (i, dat) {
        if (dat.nama == $("#code_item").val()) {

          $(".acc").addClass("is-valid");
          $("#name_item").val(dat.nama)
          $("#amount").val(dat.amount)
          $("#name_item").val(dat.nama)
          selected("#category", dat.category);
          selected("#place", dat.place);
          $('.select2-multiple2').select2({
            data: dat.spesifikasi
          })
          $('.select2-multiple2').select2().val(dat.spesifikasi).trigger("change");
          selected("#unit", dat.unit);
          selected("#condition", dat.condition);
        }
      })
    })
  });

  //code item change finis
  //get data satrt
  // code item start
  $.getJSON("../dist/sample.json", function (data) {
    $.each(data.data_item, function (i, dat) {
      $("#code_item").append("<option value='" + dat.nama + "'>" + dat.nama + "</option>")
    })
  })
  //code item finis
  //parent room and sub room
  $.getJSON("../dist/sample.json", function (data) {
    $.each(data.room.parent, function (i, dat) {
      $("#parent_room").append("<option value='" + dat + "'>" + dat + "</option>")
    })
    $.each(data.room.sub, function (i, dat) {
      $("#sub_room").append("<option>" + dat + "</option>");
    })
  })
  //get data finis
})

$.getJSON("../dist/sample.json", function (data) {
  var set_data
  $.each(data.data_item, function (i, dat) {
    $("#dataitem").append("<tr>" +
      "<td>" + dat.nama + "</td>" +
      "<td>" + dat.category + "</td>" +
      "<td>" + dat.place + "</td>" +
      "<td>" + dat.spesifikasi + "</td>" +
      "<td>" + dat.amount + "</td>" +
      "<td>" + dat.unit + "</td>" +
      "<td>" + dat.condition + "</td>" +
      "</tr>")
})
})



//triger start
//triger1
function selected(id, value) {
  $(id).val(value);
  $(id).select2().trigger('change');
};

//triger2
$("#parent_room").change(function (e) {
  const value = $("#parent_room").val()
  $("#sub_room").removeAttr("disabled");
  $.getJSON("../dist/sample.json", function (data) {
    $.each(data.room.link_room, function (i, dat) {
      if (i == value) {
        console.log(dat.sub)
        $("#sub_room").val(dat.sub).trigger("change");
      }
    })
  })
});
//triger finis
//send data
//room