<template>
    <div>
        <div>{{message}}(子组件)</div>
    </div>
</template>
<script>
export default {
    props: {
      message: String  //定义传值的类型<br>    
    }
}
</script>
<style>
</style>