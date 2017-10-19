<template>
  <mu-card class="relpy-card">
        <mu-card-header>
            <mu-avatar :src="reply.member.avatar_mini" slot="avatar"/>
            <span>{{reply.member.username}}</span>
        </mu-card-header>
        <mu-card-text v-html="relpy.contend_rendered">
        </mu-card-text>
    </mu-card>
</template>
<script>
export default {
  props: {
    reply: {
      type: Object,
      required: true
    }
  }
}
</script>
<style scoped>

</style>

