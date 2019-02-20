   
   <template>
  <div class="page-title-wrap">
    <div class="page-title">{{ pagetitle }}</div>
    <Dropdown trigger="click" style="margin-left: 20px;margin-right:10px;">
      <a href="javascript:void(0)">
        {{txt1}}
        <Icon type="ios-arrow-down"></Icon>
      </a>

      <DropdownMenu slot="list">
        <DropdownItem class="border" v-for="(o,i) in operation" :key="i">
          <div @click="$emit('jumpTo',i)" class="dep-msg-button">{{o.text}}</div>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>

    <Input :placeholder="`${o.text}搜索`" style="width: auto" v-for="(o,i) in operation" :key="i"/>
    <Button type="info">{{txt2}}</Button>
  </div>
</template>

<script>
export default {
  props: {
    pagetitle: String,
    operation: Array
  },
  data() {
    return {
      txt1: "操作",
      txt2: "搜索"
    };
  }
};
</script>
   
