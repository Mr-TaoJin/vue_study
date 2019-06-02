<template>
    <div>
        <div>父组件</div>
        <child :message="parentMsg"></child>  
    </div>
</template>
 
<script>
 
import child from './child'  //引入child组件
export default {
    data() {
            return {
                parentMsg: 'a message from parent'  //在data中定义需要传入的值
            }
        },
        components: {
            child
        }
}
</script>
<style>
</style>