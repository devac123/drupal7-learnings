// console.log(jQuery('.block-views-product-search-block-block'));
// var dietTagWrapperParent =  jQuery('.block-views-product-search-block-block').find('.views-widget-filter-field_diet_tags_tid').find('.views-widget')
// dietTagWrapperParent.prepend('<div class="diet_tag_cards card-stack"></div>')
// var dietTagWrapper =  jQuery('.block-views-product-search-block-block').find('.edit-field-diet-tags-tid')

// dietTagWrapper.each(function(index){
// console.log(jQuery(this))
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
        	filterWrapper = jQuery('#block-views-product-search-block-block').find('.views-widget-filter-field_diet_tags_tid .views-widget');
			if(filterWrapper.length > 0){
				filterWrapper.prepend('<div class="diet_tag_cards card-stack"></div>')
				FilterInput = filterWrapper.find('div')
				htmlElement = ''
				FilterInput.each(function(index){
					
					radio_id = jQuery(this).find('input').attr('id');
					ProductName = jQuery(this).find('label').text()
					if(ProductName.includes('Any'))
						{
							ProductName = 'Any'; 
						}
					if(radio_id &&  jQuery('.diet_tag_card[data-id="'+ radio_id +'"]').length === 0){
						if(index == 1 ){
							htmlElement += '<div class="diet_tag_card active"  data-id="' + radio_id + '"><span class="product_name">' + ProductName + '</span></div>'
						}
						else{
							htmlElement += '<div class="diet_tag_card"  data-id="' + radio_id + '"><span class="product_name">' + ProductName + '</span></div>'
						}
					}
				})
				jQuery('.diet_tag_cards').html(htmlElement)
				jQuery('.diet_tag_card').each(function(index){
					jQuery(this).css('z-index', '1')
					jQuery(this).css('transform', 'translateX(20px)')
					if(jQuery(this).attr('data-id') == filterWrapper.find('input[checked="checked"]').attr('id')){
						jQuery(this).css('z-index', '2')
						jQuery(this).css('transform', 'translateX(0px)')
					}  
				})
				jQuery('#edit-field-diet-tags-tid div').click(function () {
					var radio_id = jQuery(this).find('input').attr('id');
					jQuery('.diet_tag_card').css('z-index', '1').css('transform', 'translateX(20px)');
					jQuery('.diet_tag_card[data-id="' + radio_id + '"]').css('z-index', '2').css('transform', 'translateX(0px)');;
				  });
			}
        });
      }
    };
  })(jQuery);