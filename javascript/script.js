(function(){var e,t,n,r,i,o,_,a,s,c,u,h,l=[].indexOf||function(e){for(var t=0,n=this.length;n>t;t++)if(t in this&&this[t]===e)return t;return-1};n=function(){function e(){this.values_that_need_prefixing=["flex","inline-flex"],this.prefix=this.derive_prefix()}return e.install_css2_jquery_plugin=function(){var t;return t=new e,$.fn.css2=function(e,n){return n=t.add_prefix(n),this.css(e,n)}},e.prototype.add_prefix=function(e){return this.needs_prefix(e)?""+this.prefix+e:e},e.prototype.derive_prefix=function(){var e;switch(e=$("body").get(0).style,!1){case null==e.webkitFlex:return"-webkit-";case null==e.mozFlex:return"-moz-";case null==e.msFlex:return"-ms-";default:return""}},e.prototype.needs_prefix=function(e){return l.call(this.values_that_need_prefixing,e)>=0},e}(),t=function(){function e(e,t){this.css_name=e,this.$dom_element=this.create_dom_element(),null!=t&&this.set_value(t)}return e.prototype.dom_element=function(){return this.$dom_element},e.prototype.set_value=function(e){return this.$dom_element.text(""+this.css_name+": "+e+";")},e.prototype.create_dom_element=function(){return $("<span class='css-code'></span>")},e}(),o=function(){function e(){}return e.convert=function(t,n){var r;return(r=e["range_to_"+t.replace(/-/g,"_")])(n)},e.range_to_align_content=function(e){return["flex-start","flex-end","center","space-between","space-around","stretch"][e]},e.range_to_align_items=function(e){return["flex-start","flex-end","center","baseline","stretch"][e]},e.range_to_align_self=function(e){return["auto","flex-start","flex-end","center","baseline","stretch"][e]},e.range_to_display=function(e){return["none","inline","inline-block","block","inline-flex","flex"][e]},e.range_to_flex_direction=function(e){return["row","row-reverse","column","column-reverse"][e]},e.range_to_flex_wrap=function(e){return["nowrap","wrap","wrap-reverse"][e]},e.range_to_float=function(e){return["none","left","right"][e]},e.range_to_justify_content=function(e){return["flex-start","flex-end","center","space-between","space-around"][e]},e.range_to_text_align=function(e){return["left","center","right","justify"][e]},e.range_to_em=function(e){return e+"em"},e.range_to_number=function(e){return e},e.range_to_flex_basis=e.range_to_em,e.range_to_flex_grow=e.range_to_number,e.range_to_flex_shrink=e.range_to_number,e.range_to_font_size=e.range_to_em,e.range_to_height=e.range_to_em,e.range_to_margin=e.range_to_em,e.range_to_margin_top=e.range_to_em,e.range_to_margin_bottom=e.range_to_em,e.range_to_margin_left=e.range_to_em,e.range_to_margin_right=e.range_to_em,e.range_to_max_width=e.range_to_em,e.range_to_order=e.range_to_number,e.range_to_padding=e.range_to_em,e.range_to_padding_top=e.range_to_em,e.range_to_padding_bottom=e.range_to_em,e.range_to_padding_left=e.range_to_em,e.range_to_padding_right=e.range_to_em,e.range_to_width=e.range_to_em,e}(),i=function(){function e(e){this.range=e,this.$range=$(e),this.link_dom_element_to_wrapper(e),this.extract_and_save_attributes(),this.create_and_insert_display(),this.install_change_handler()}return e.prototype.refresh=function(){var e;return e=this.calc_css_value(this.range.value),this.update_mockup_dom_element(e),this.update_css_attribute_view(e)},e.prototype.reset=function(){return this.range.value=this.css_default_value,this.$range.trigger("change")},e.prototype.link_dom_element_to_wrapper=function(e){return e.o=this},e.prototype.extract_and_save_attributes=function(){return this.mockup_dom_element=$(this.$range.data("mockup-dom-element")),this.css_name=this.$range.data("css-attr-name"),this.css_default_value=this.$range.data("default-value")},e.prototype.create_and_insert_display=function(){return this.display=new t(this.css_name),this.$range.before(this.display.dom_element())},e.prototype.install_change_handler=function(){return this.$range.on("input change",function(){return u()})},e.prototype.calc_css_value=function(e){return o.convert(this.css_name,e)},e.prototype.update_mockup_dom_element=function(e){return this.mockup_dom_element.css2(this.css_name,e)},e.prototype.update_css_attribute_view=function(e){return this.display.set_value(e)},e}(),e=function(){function e(e){this.checkbox=e,this.$checkbox=$(e),this.link_dom_element_to_wrapper(e),this.extract_and_save_attributes(),this.create_and_insert_display(),this.install_change_handler()}return e.prototype.refresh=function(){var e;return e=this.$checkbox.prop("checked"),e?this.update_mockup_dom_element(this.css_value):void 0},e.prototype.reset=function(){return this.$checkbox.prop("checked",!0),this.$checkbox.trigger("change")},e.prototype.link_dom_element_to_wrapper=function(e){return e.o=this},e.prototype.extract_and_save_attributes=function(){return this.mockup_dom_element=$(this.$checkbox.data("mockup-dom-element")),this.css_name=this.$checkbox.data("css-attr-name"),this.css_value=this.$checkbox.data("css-attr-value")},e.prototype.create_and_insert_display=function(){return this.display=new t(this.css_name,this.css_value),this.$checkbox.before(this.display.dom_element())},e.prototype.install_change_handler=function(){return this.$checkbox.on("input change",function(){return this.o.on_change()})},e.prototype.on_change=function(){var e;return e=this.$checkbox.prop("checked"),e?this.display.dom_element().css2("text-decoration",""):(this.mockup_dom_element.css2(this.css_name,""),this.display.dom_element().css2("text-decoration","line-through")),u()},e.prototype.update_mockup_dom_element=function(e){return this.mockup_dom_element.css2(this.css_name,e)},e}(),r=function(){function e(e){this.$hidden=$(e),this.link_dom_element_to_wrapper(e),this.extract_and_save_attributes(),this.create_and_insert_display()}return e.prototype.refresh=function(){return this.mockup_dom_element.css2(this.css_name,this.css_value)},e.prototype.reset=function(){},e.prototype.link_dom_element_to_wrapper=function(e){return e.o=this},e.prototype.extract_and_save_attributes=function(){return this.mockup_dom_element=$(this.$hidden.data("mockup-dom-element")),this.css_name=this.$hidden.data("css-attr-name"),this.css_value=this.$hidden.data("css-attr-value")},e.prototype.create_and_insert_display=function(){var e;return e=new t(this.css_name,this.css_value),this.$hidden.before(e.dom_element())},e}(),c=function(){return $("input[type='range']").each(function(){return new i(this)})},a=function(){return $("input[type='checkbox']").each(function(){return new e(this)})},s=function(){return $("input[type='hidden']").each(function(){return new r(this)})},_=function(){return $("#reset").on("click",function(){return h()})},u=function(){return $("input").each(function(){return this.o.refresh()})},h=function(){return $("input").each(function(){return this.o.reset()})},n.install_css2_jquery_plugin(),c(),a(),s(),_(),h()}).call(this);