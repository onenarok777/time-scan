<template>
  <button
    :class="[
      'btn text-nowrap',
      type,
      variant,
      props.wide && 'btn-wide',
      props.circle && 'btn-circle',
      props.block && 'btn-block',
    ]"
  >
    <slot />
  </button>
</template>
<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    type?:
      | "primary"
      | "secondary"
      | "danger"
      | "success"
      | "warning"
      | "info"
      | "light"
      | "dark";
    variant?: "solid" | "outline" | "ghost" | "link";
    wide?: boolean;
    circle?: boolean;
    block?: boolean;
  }>(),
  {
    type: "primary",
    variant: "solid",
    wide: false,
    circle: false,
    block: false,
  }
);

const type = computed(() => {
  const arr = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    danger: "btn-danger",
    success: "btn-success",
    warning: "btn-warning",
    info: "btn-info",
    light: "btn-light",
    dark: "btn-dark",
  };
  return arr[props.type];
});

const variant = computed(() => {
  const arr = {
    solid: "btn-solid",
    outline: "btn-outline",
    ghost: "btn-ghost",
    link: "btn-link",
  };
  return arr[props.variant];
});
</script>
