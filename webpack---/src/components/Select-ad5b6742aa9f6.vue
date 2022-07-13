module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "dropdown v-select",
    class: _vm.dropdownClasses,
    attrs: {
      "dir": _vm.dir
    }
  }, [_c('div', {
    ref: "toggle",
    class: ['dropdown-toggle', 'clearfix'],
    on: {
      "mousedown": function($event) {
        $event.preventDefault();
        _vm.toggleDropdown($event)
      }
    }
  }, [_vm._l((_vm.valueAsArray), function(option) {
    return _c('span', {
      key: option.index,
      staticClass: "selected-tag"
    }, [_vm._t("selected-option", [_vm._v("\n        " + _vm._s(_vm.getOptionLabel(option)) + "\n      ")], null, option), _vm._v(" "), (_vm.multiple) ? _c('button', {
      staticClass: "close",
      attrs: {
        "disabled": _vm.disabled,
        "type": "button",
        "aria-label": "Remove option"
      },
      on: {
        "click": function($event) {
          _vm.deselect(option)
        }
      }
    }, [_c('span', {
      attrs: {
        "aria-hidden": "true"
      }
    }, [_vm._v("×")])]) : _vm._e()], 2)
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.search),
      expression: "search"
    }],
    ref: "search",
    staticClass: "form-control",
    style: ({
      width: _vm.isValueEmpty ? '100%' : 'auto'
    }),
    attrs: {
      "type": "search",
      "autocomplete": "false",
      "disabled": _vm.disabled,
      "placeholder": _vm.searchPlaceholder,
      "tabindex": _vm.tabindex,
      "readonly": !_vm.searchable,
      "id": _vm.inputId,
      "aria-label": "Search for option"
    },
    domProps: {
      "value": (_vm.search)
    },
    on: {
      "keydown": [function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "delete", [8, 46], $event.key)) { return null; }
        _vm.maybeDeleteValue($event)
      }, function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "up", 38, $event.key)) { return null; }
        $event.preventDefault();
        _vm.typeAheadUp($event)
      }, function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "down", 40, $event.key)) { return null; }
        $event.preventDefault();
        _vm.typeAheadDown($event)
      }, function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13, $event.key)) { return null; }
        $event.preventDefault();
        _vm.typeAheadSelect($event)
      }],
      "keyup": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "esc", 27, $event.key)) { return null; }
        _vm.onEscape($event)
      },
      "blur": _vm.onSearchBlur,
      "focus": _vm.onSearchFocus,
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.search = $event.target.value
      }
    }
  }), _vm._v(" "), _c('button', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showClearButton),
      expression: "showClearButton"
    }],
    staticClass: "clear",
    attrs: {
      "disabled": _vm.disabled,
      "type": "button",
      "title": "Clear selection"
    },
    on: {
      "click": _vm.clearSelection
    }
  }, [_c('span', {
    attrs: {
      "aria-hidden": "true"
    }
  }, [_vm._v("×")])]), _vm._v(" "), (!_vm.noDrop) ? _c('i', {
    ref: "openIndicator",
    staticClass: "open-indicator",
    attrs: {
      "role": "presentation"
    }
  }) : _vm._e(), _vm._v(" "), _vm._t("spinner", [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.mutableLoading),
      expression: "mutableLoading"
    }],
    staticClass: "spinner"
  }, [_vm._v("Loading...")])])], 2), _vm._v(" "), _c('transition', {
    attrs: {
      "name": _vm.transition
    }
  }, [(_vm.dropdownOpen) ? _c('ul', {
    ref: "dropdownMenu",
    staticClass: "dropdown-menu",
    style: ({
      'max-height': _vm.maxHeight
    })
  }, [_vm._l((_vm.filteredOptions), function(option, index) {
    return _c('li', {
      key: index,
      class: {
        active: _vm.isOptionSelected(option), highlight: index === _vm.typeAheadPointer
      },
      on: {
        "mouseover": function($event) {
          _vm.typeAheadPointer = index
        }
      }
    }, [_c('a', {
      on: {
        "mousedown": function($event) {
          $event.preventDefault();
          _vm.select(option)
        }
      }
    }, [_vm._t("option", [_vm._v("\n          " + _vm._s(_vm.getOptionLabel(option)) + "\n        ")], null, option)], 2)])
  }), _vm._v(" "), (!_vm.filteredOptions.length) ? _c('li', {
    staticClass: "no-options"
  }, [_vm._t("no-options", [_vm._v("Sorry, no matching options.")])], 2) : _vm._e()], 2) : _vm._e()])], 1)
},staticRenderFns: []}


//////////////////
// WEBPACK FOOTER
// ./~/vue-loader/lib/template-compiler.js?id=data-v-3e06dd28!./~/vue-loader/lib/selector.js?type=template&index=0!./src/components/Select.vue
// module id = 85
// module chunks = 0