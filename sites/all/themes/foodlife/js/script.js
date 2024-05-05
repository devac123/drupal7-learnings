// console.log(jQuery('.block-views-product-search-block-block'));
// var dietTagWrapperParent =  jQuery('.block-views-product-search-block-block').find('.views-widget-filter-field_diet_tags_tid').find('.views-widget')
// dietTagWrapperParent.prepend('<div class="diet_tag_cards card-stack"></div>')
// var dietTagWrapper =  jQuery('.block-views-product-search-block-block').find('.edit-field-diet-tags-tid')

// dietTagWrapper.each(function(index){
//     console.log(jQuery(this))
    // htemlElemwnt = '<div class="product_type_card" id="diet_tag_card-' + item + '" data-id="' + radio_id + '">' + ProductName + '</div>'
    // if(index==0){
    //     jQuery('.diet_tag_cards').append()
    // }
// })

// console.log(dietTagWrapper);

(function($) {
    Drupal.behaviors.myCustomBehavior = {
      attach: function (context, settings) {
        // Your JavaScript code here.
        $('.views-exposed-form', context).once('my-custom-behavior', function () {
            console.log(jQuery('#block-views-product-search-block-block'));
            setTimeout(() => {
               
                
            }, 1000);
          // This code will run each time the element is added or refreshed via AJAX.
          // Add your event handlers or other JavaScript logic here.
        });
      }
    };
  })(jQuery);