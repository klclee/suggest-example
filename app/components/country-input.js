import Ember from 'ember';
import Suggest from 'suggest-addon/mixins/suggest';
import SuggestExtra from 'suggest-addon/mixins/suggest-extra';
import Countries from 'suggest-example/utils/countries';

export default Ember.Component.extend(Suggest, SuggestExtra,{
  suggestStylesOn: 'position: absolute; top: 10%; left: 0px; z-index: 100; display: block; right: auto;',
  didInsertElement: function(){
    this.set('doDebounce', this.searchCountry);
  },
  searchCountry: function(){
    var _scope = this;
    var found = Countries.findBy('display', this.inputVal);
    this.set('suggestions',[found]);
    this.set('suggestStyles', _scope.get('suggestStylesOn'));

  },
  actions: {
    selectCity: function(item){
      this.set('selectedVal', item.get('name'));
    }
  }
});
