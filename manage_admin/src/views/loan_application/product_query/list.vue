<template>
  <div class="container_box">
    <div class="title_box tr">
      <router-link :to="{path:'/loan_products/product_query/add'}">
        <el-button type="primary">新增产品</el-button>
      </router-link>
    </div>
    <div class="search_box">
      <label for=""
             class="form_la">
        <span class="tit_la">产品编号</span>
        <el-input placeholder="请输入产品编号"></el-input>
      </label>
      <label for=""
             class="form_la">
        <span class="tit_la">产品名称</span>
        <el-input placeholder="请输入产品名称"></el-input>
      </label>
      <label for=""
             class="form_la">
        <span class="tit_la">产品类型</span>
        <el-select v-model="form_data.value1"
                   placeholder="请选择">
          <el-option v-for="item in options1"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
      </label>
      <label for=""
             class="form_la">
        <span class="tit_la">产品所属机构</span>
        <el-select v-model="form_data.value2"
                   placeholder="请选择">
          <el-option v-for="item in options2"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
      </label>
    </div>
    <div class="btn_box tc">
      <el-button type="success"
                 round>查 询</el-button>
      <el-button type="info"
                 round>清 空</el-button>
    </div>
    <div class="table_box">
      <el-table v-loading="listLoading"
                :data="list"
                element-loading-text="Loading"
                border
                fit
                highlight-current-row>
        <el-table-column align="center"
                         label="产品编号">
          <template slot-scope="scope">
            {{ scope.row.t1 }}
          </template>
        </el-table-column>
        <el-table-column label="产品名称"
                         align="center">
          <template slot-scope="scope">
            {{ scope.row.t2 }}
          </template>
        </el-table-column>
        <el-table-column label="产品所属机构"
                         align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.t3 }}</span>
          </template>
        </el-table-column>
        <el-table-column label="产品类型"
                         width="100"
                         align="center">
          <template slot-scope="scope">
            {{ scope.row.t4 }}
          </template>
        </el-table-column>
        <el-table-column class-name="status-col"
                         label="有效状态"
                         align="center">
          <template slot-scope="scope">
            {{ scope.row.t5 }}
          </template>
        </el-table-column>
        <el-table-column align="center"
                         prop="created_at"
                         label="贷款金额">
          <template slot-scope="scope">
            {{ scope.row.t6 }}
          </template>
        </el-table-column>
        <el-table-column class-name="status-col"
                         label="贷款期限"
                         align="center">
          <template slot-scope="scope">
            {{ scope.row.t7 }}
          </template>
        </el-table-column>
        <el-table-column class-name="status-col"
                         label="贷款利率"
                         width="100"
                         align="center">
          <template slot-scope="scope">
            {{ scope.row.t8 }}
          </template>
        </el-table-column>
        <el-table-column class-name="status-col"
                         label="产品标题"
                         align="center">
          <template slot-scope="scope">
            {{ scope.row.t9 }}
          </template>
        </el-table-column>
        <el-table-column class-name="status-col"
                         label="是否发布"
                         align="center">
          <template slot-scope="scope">
            {{ scope.row.t10 }}
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { getList } from "@/api/table";
export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: "success",
        draft: "gray",
        deleted: "danger"
      };
      return statusMap[status];
    }
  },
  data() {
    return {
      form_data: {
        value1: "",
        value2: ""
      },
      options1: [
        {
          value: "0",
          label: "企业"
        },
        {
          value: "1",
          label: "个人"
        }
      ],
      options2: [
        {
          value: "0",
          label: "中国建设银行"
        }
      ],
      list: null,
      listLoading: true
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.listLoading = true;
      getList(this.listQuery).then(response => {
        this.list = [
          {
            t1: "20195887748844",
            t2: "短期快e贷（消费）",
            t3: "中国建设银行",
            t4: "个人",
            t5: "有效",
            t6: "0-30万元",
            t7: "最长12个月",
            t8: "年利率5.6%",
            t9: "建行市民快贷",
            t10: "是"
          },
          {
            t1: "20195887748844",
            t2: "短期快e贷（消费）",
            t3: "中国建设银行",
            t4: "个人",
            t5: "有效",
            t6: "0-30万元",
            t7: "最长12个月",
            t8: "年利率5.6%",
            t9: "建行市民快贷",
            t10: "是"
          },
          {
            t1: "20195887748844",
            t2: "短期快e贷（消费）",
            t3: "中国建设银行",
            t4: "个人",
            t5: "有效",
            t6: "0-30万元",
            t7: "最长12个月",
            t8: "年利率5.6%",
            t9: "建行市民快贷",
            t10: "是"
          },
          {
            t1: "20195887748844",
            t2: "短期快e贷（消费）",
            t3: "中国建设银行",
            t4: "个人",
            t5: "有效",
            t6: "0-30万元",
            t7: "最长12个月",
            t8: "年利率5.6%",
            t9: "建行市民快贷",
            t10: "是"
          },
          {
            t1: "20195887748844",
            t2: "短期快e贷（消费）",
            t3: "中国建设银行",
            t4: "个人",
            t5: "有效",
            t6: "0-30万元",
            t7: "最长12个月",
            t8: "年利率5.6%",
            t9: "建行市民快贷",
            t10: "是"
          },
          {
            t1: "20195887748844",
            t2: "短期快e贷（消费）",
            t3: "中国建设银行",
            t4: "个人",
            t5: "有效",
            t6: "0-30万元",
            t7: "最长12个月",
            t8: "年利率5.6%",
            t9: "建行市民快贷",
            t10: "否"
          },
          {
            t1: "20195887748844",
            t2: "短期快e贷（消费）",
            t3: "中国建设银行",
            t4: "个人",
            t5: "有效",
            t6: "0-30万元",
            t7: "最长12个月",
            t8: "年利率5.6%",
            t9: "建行市民快贷",
            t10: "否"
          },
        ];
        this.listLoading = false;
      });
    }
  }
};
</script>

<style lang="scss" scoped>

</style>