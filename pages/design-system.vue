<template>
  <div class="max-w-7xl mx-auto my-72">
    <NuxtLink to="/">Home page</NuxtLink>
    <h1>Design System</h1>

    <h2 class="h2 text-[48px] mb-10">Colors</h2>
    <section class="grid grid-cols-4 gap-10">
      <DesignSystemColor
        hexa="#AD1FEA"
        rgb="173, 31, 234"
        hsl="282°, 83%, 52%"
      ></DesignSystemColor>
      <DesignSystemColor
        hexa="#4661E6"
        rgb="70, 97, 230"
        hsl="230°, 76%, 59%"
      ></DesignSystemColor>
      <DesignSystemColor
        hexa="#373F68"
        rgb="55, 63, 104"
        hsl="230°, 31%, 31%"
      ></DesignSystemColor>
      <DesignSystemColor
        hexa="#FFFFFF"
        rgb="255, 255, 255"
        hsl="0°, 0%, 100%"
      ></DesignSystemColor>
      <DesignSystemColor
        hexa="#F2F4FF"
        rgb="242, 244, 255"
        hsl="231°, 100%, 97%"
      ></DesignSystemColor>
      <DesignSystemColor
        hexa="#F7F8FD"
        rgb="247, 248, 253"
        hsl="230°, 60%, 98%"
      ></DesignSystemColor>
      <DesignSystemColor
        hexa="#3A4374"
        rgb="58, 67, 116"
        hsl="231°, 33%, 34%"
      ></DesignSystemColor>
      <DesignSystemColor
        hexa="#647196"
        rgb="100, 113, 150"
        hsl="224°, 20%, 49%"
      ></DesignSystemColor>
      <DesignSystemColor
        hexa="#F49F85"
        rgb="244, 159, 133"
        hsl="14°, 83%, 74%"
      ></DesignSystemColor>
      <DesignSystemColor
        hexa="#62BCFA"
        rgb="98, 188, 250"
        hsl="204°, 94%, 68%"
      ></DesignSystemColor>
    </section>

    <div>
      <h2 class="h2 text-[48px] mb-10 mt-20">Typographie</h2>

      <section class="grid grid-cols-2 gap-10">
        <div class="flex flex-col gap-5">
          <div>
            H1: <span class="h1">Sed egestas ante et vulputate volutpat</span>
          </div>
          <div>
            H2: <span class="h2">Sed egestas ante et vulputate volutpat</span>
          </div>
          <div>
            H3: <span class="h3">Sed egestas ante et vulputate volutpat</span>
          </div>
          <div>
            H4: <span class="h4">Sed egestas ante et vulputate volutpat</span>
          </div>
        </div>
        <div class="flex flex-col gap-5">
          <div>
            body1:
            <span class="text-m"
              >Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
              neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
              ligula sollicitudin laoreet viverra, tortor libero sodales leo,
              eget blandit nunc tortor eu nibh. Nullam mollis.</span
            >
          </div>
          <div>
            body2:
            <span class="text-s"
              >Sed egestas, ante et vulputate volutpat, eros pede semper est,
              vitae luctus metus libero eu augue. Morbi purus libero, faucibus
              adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent
              elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum
              volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu
              pulvinar nunc sapien ornare nisl. Phasellus pede arcu</span
            >
          </div>
          <div>
            body1:
            <span class="text-xxs"
              >Sed egestas, ante et vulputate volutpat, eros pede semper est,
              vitae luctus metus libero eu augue. Morbi purus libero, faucibus
              adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent
              elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum
              volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu
              pulvinar nunc sapien ornare nisl. Phasellus pede arcu</span
            >
          </div>
        </div>
      </section>
    </div>

    <div>
      <h2 class="h2 text-[48px] mb-10 mt-20">buttons</h2>

      <section>
        <div class="grid grid-cols-4 gap-10">
          <Button theme="primary">Button 1</Button>
          <Button theme="secondary">Button 2</Button>
          <Button theme="third">Button 3</Button>
          <Button theme="error">Error</Button>
          <Button theme="link">Go to</Button>
          <Button theme="linkButton">Go to</Button>
        </div>
      </section>
    </div>

    <div>
      <h2 class="h2 text-[48px] mb-10 mt-20">Interactive elements</h2>

      <div class="flex gap-10">
        <section class="flex flex-col gap-10">
          <div class="grid grid-cols-4 gap-10">
            <Tag>UX</Tag>
            <Tag :is-active="true">UX</Tag>
          </div>
          <div class="grid grid-cols-4 gap-10">
            <Upvote>UX</Upvote>
            <Upvote :is-active="true">UX</Upvote>
          </div>
        </section>
        <VoteSortMenu></VoteSortMenu>
      </div>
    </div>
    <div>
      <h2 class="h2 text-[48px] mb-10 mt-20">Form elements</h2>

      <div class="flex gap-10">
        <InputText />
        <InputText error-message="Has error" />
      </div>
      <div class="flex gap-10">
        <Dropdown />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from "~~/components/ui/Button.vue";
import Dropdown from "~~/components/ui/form/Dropdown.vue";
import InputText from "~~/components/ui/form/InputText.vue";
import Tag from "~~/components/ui/Tag.vue";
import Upvote from "~~/components/ui/Upvote.vue";
import VoteSortMenu from "~~/components/ui/VoteSortMenu.vue";
</script>
