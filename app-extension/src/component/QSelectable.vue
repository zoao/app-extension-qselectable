<template>
  <div
    class="q-selectable"
    :class="classes"
    @keydown="__onKeydown"
    @keyup="__onKeyup"
    :tabindex="computedTabindex"
    v-touch-hold:[String(longPressMs)].mouse="toggleTouch"
  >
    <input class="q-selectable__native q-ma-none q-pa-none hidden" type="checkbox" />

    <slot v-if="isFalse || !hideContentOnSelected"></slot>
    <slot name="selected" v-if="isTrue"></slot>

    <div :class="iconClasses" v-if="showIcon" @click="toggle">
      <slot name="icon" v-bind:selected="isTrue">
        <q-icon
          :name="isTrue? selectedIcon: unselectedIcon"
          :size="iconSize"
          :color="isTrue? selectedIconColor: unselectedIconColor"
        ></q-icon>
      </slot>
    </div>
  </div>
</template>

<script>
import { event } from "quasar";

export default {
  name: "QSelectable",

  props: {
    value: {
      required: true
    },
    val: {
      required: true
    },
    hideContentOnSelected: Boolean,
    tabindex: [String, Number],
    disable: Boolean,
    longPressFirstSelection: {
      type: Number,
      default: 1
    },
    onlySelectInIcon: Boolean,
    selectedIconColor: {
      type: String,
      default: "primary"
    },
    selectedIcon: {
      type: String,
      default: "check_circle"
    },
    iconSize: {
      type: String,
      default: "md"
    },
    onlyShowUnselectedIconIfOneSel: Boolean,
    unselectedIcon: {
      type: String,
      default: "radio_button_unchecked"
    },
    unselectedIconColor: {
      type: String,
      default: "grey-4"
    },
    paddingSelected: Boolean,
    bgSelectedColor: {
      type: String,
      default: "bg-grey-4"
    },
    manual: Boolean,
    iconPosition: {
      type: String,
      default: "top left",
      validator: function(value) {
        let parts = value.split(" ");

        if (parts.length !== 1 && parts.length !== 2) {
          return false;
        }

        if (!["top", "center", "bottom"].includes(parts[0])) {
          console.error(
            "Icon position must start with one of top/center/bottom"
          );
          return false;
        }
        if (
          parts.length === 2 &&
          !["left", "middle", "right"].includes(parts[1])
        ) {
          console.error(
            "Icon position must be empty or end with one of left/middle/right"
          );
          return false;
        }
        return true;
      }
    }
  },

  computed: {
    isTrue() {
      return this.modelIsArray ? this.index > -1 : this.value === this.val;
    },
    isFalse() {
      return this.modelIsArray ? this.index === -1 : this.value !== this.val;
    },
    index() {
      if (this.modelIsArray === true) {
        return this.value.indexOf(this.val);
      } else return this.isTrue ? 1 : -1;
    },
    hasValue() {
      return this.modelIsArray
        ? this.value.length > 0
        : (this.value != void 0 && this.value !== "");
    },
    classes() {
      let c = {
        "cursor-pointer": !this.onlySelectInIcon && this.manual !== true,
        selected: this.isTrue,
        disabled: this.disable,
        padding: this.isTrue && this.paddingSelected
      };
      c[this.bgSelectedColor] = this.isTrue;

      return c;
    },
    iconClasses() {
      let iconPositionParts = this.iconPosition.split(" ");

      let c = {
        "selection-icon": true,
        "cursor-pointer": this.manual !== true,
        selected: this.isTrue,
        unselected: this.isFalse
      };
      c[iconPositionParts[0]] = true;
      if (iconPositionParts.length > 1) c[iconPositionParts[1]] = true;

      return c;
    },
    modelIsArray() {
      return this.value != void 0 && Array.isArray(this.value);
    },
    computedTabindex() {
      return this.disable === true ? -1 : this.tabindex || 0;
    },
    showIcon() {
      if (this.isTrue)
        return this.selectedIcon != void 0 && this.selectedIcon !== "";

      //isFalse
      return (
        this.unselectedIcon != void 0 &&
        this.unselectedIcon !== "" &&
        (!this.onlyShowUnselectedIconIfOneSel || this.hasValue)
      );
    },
    longPressMs() {
      if(this.onlySelectInIcon)
        return 90000;
      if (!this.hasValue) return this.longPressFirstSelection;
      else return 1; //If has one or more selected, can select, else must select with long press "toogleTouch"
    }
  },

  methods: {
    toggleTouch(e) {
      if(this.onlySelectInIcon || this.manual === true)
        return;
      
      this.toggle(e.evt);
    },
    toggle(e) {
      if (this.disable === true || this.manual === true) {
        return;
      }

      if(e != void 0)
        event.stopAndPrevent(e);

      let newValue;

      if (this.modelIsArray === true) {
        if (this.isTrue === true) {
          newValue = this.value.slice();
          newValue.splice(this.index, 1);
        } else {
          newValue = this.value.concat([this.val]);
        }
      } else {
        newValue = this.isTrue === true ? null : this.val;
      }

      this.$emit("input", newValue);
    },
    __onKeydown(e) {
      if (this.disable === true) {
        return;
      }

      if (e.keyCode === 13 || e.keyCode === 32) {
        event.stopAndPrevent(e);
      }
    },
    __onKeyup(e) {
      if (e.keyCode === 13 || e.keyCode === 32) {
        this.toggle(e);
      }
    }
  }
};
</script>


<style scoped lang="scss">
.disabled {
  opacity: 0.75 !important;
}

.q-selectable {
  position: relative;
}

.selected.padding {
  padding: 1em;
}
.selection-icon {
  position: absolute;
}

.selection-icon.top {
  top: 0px;
}
.selection-icon.center {
  top: 50%;
}
.selection-icon.bottom {
  bottom: 0px;
}
.selection-icon.left {
  left: 0px;
}
.selection-icon.middle {
  left: 50%;
}
.selection-icon.right {
  right: 0px;
}
</style>
