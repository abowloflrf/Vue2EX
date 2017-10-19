<template>
    <mu-card class="topic-card">
        <mu-card-header>
            <mu-avatar :src="topic.member.avatar_mini" slot="avatar"/>
            <span>{{topic.member.username}}</span>
        </mu-card-header>
        <mu-card-text>
            <h2>{{topic.title}}</h2>
        </mu-card-text>
        <mu-divider/>
        <mu-card-actions>
            <mu-chip class="demo-chip">
                {{topic.node.title}}
            </mu-chip>
        </mu-card-actions>
    </mu-card>
</template>
<script>
export default {
  props: {
    topic: {
      type: Object,
      required: true
    }
  }
};
</script>
<style>
.topic-card{
    margin: 15px 40px;
}
</style>

