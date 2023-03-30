<template>
  <div class="content">
    <p class="title">{{ $t("RECENTWEBINARS") }}</p>
    <div class="line"></div>
    <p class="hint">
      {{ $t("WEBINAR") }}
    </p>
    <p class="view-all" style="margin-bottom: 80px">{{ $t("VIEWALL") }}</p>
    <div style="width: 100%; padding-top: 50px; display: none">
      <img src="@/assets/images/web_first.svg" />
      <img src="@/assets/images/web_second.svg" class="middle" />
      <img src="@/assets/images/web_third.svg" />
    </div>
  </div>
</template>

<script>
import { useI18n } from "vue-i18n"

export default {
  setup() {
    const { t, locale } = useI18n({ useScope: "global" })
    return { t, locale }
  },
  name: "webinars-component",
}
</script>

<style scoped>
.content {
  width: 84%;
  margin-top: 54px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
.title {
  color: #1c1c33;
  font-size: 44px;
  line-height: 52px;
  font-family: Poppins-Regular, system-ui;
}
.line {
  margin-left: auto;
  margin-right: auto;
  margin-top: 17px;
  width: 150px;
  height: 2px;
  background: #9347b2;
}
.hint {
  color: #4e4e65;
  font-size: 22px;
  line-height: 33px;
  margin-top: 50px;
}
.view-all {
  width: max-content;
  margin-left: auto;
  margin-right: auto;
  margin-top: 46px;
  font-size: 18px;
  line-height: 26px;
  font-family: Poppins-Regular, system-ui;
  color: #1c1c33;
  padding: 12px 20px;
  background: #f88ae6;
  cursor: pointer;
}
img {
  width: 32%;
  cursor: pointer;
}
.middle {
  margin-left: 2%;
  margin-right: 2%;
}
@media screen and (max-width: 1000px) {
  .content {
    width: 100%;
  }
}

::-webkit-scrollbar {
  width: 1px;
  height: 0;
}
::-webkit-scrollbar-track {
  background-color: transparent;
}
::-webkit-scrollbar-thumb {
  background-color: #b247a7;
}
::-webkit-scrollbar:hover {
  background-color: #b247a7;
}
::-webkit-scrollbar-button {
  background: #f8f8f8;
}
</style>
