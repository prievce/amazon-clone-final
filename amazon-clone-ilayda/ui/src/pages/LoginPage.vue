<template>
  <div>
    <div>
      <LoginHeader />
      <LoginBody />
      <LoginFooter />
    </div>
  </div>
</template>

<script lang="ts">
import LoginHeader from '../components/LoginHeader.vue';
import LoginBody from '../components/LoginBody.vue';
import LoginFooter from '../components/LoginFooter.vue';

export default {
  name: 'app',
  components: {
    LoginHeader,
    LoginBody,
    LoginFooter,
  },
};
</script>
