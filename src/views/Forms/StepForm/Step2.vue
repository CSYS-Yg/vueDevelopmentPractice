<template>
  <div>
    <a-form layout="horizontal" :form="form">
      <a-form-item
        label="付款账户"
        :label-col="fromItemLayout.labelCol"
        :wrapper-col="fromItemLayout.wrapperCol"
      >
        {{ step.payAccount }}
      </a-form-item>
      <a-form-item
        label="密码"
        :label-col="fromItemLayout.labelCol"
        :wrapper-col="fromItemLayout.wrapperCol"
      >
        <a-input
          type="password"
          placeholder="请输入密码"
          v-decorator="[
            'password',
            {
              rules: [
                {
                  required: true,
                  len: 6,
                  message: '密码长度必须为6位'
                }
              ]
            }
          ]"
        ></a-input>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" @click="handleSubmit">提交</a-button>
        <a-button style="margin-left:20px" @click="onPrev">上一步</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  data() {
    this.form = this.$form.createForm(this);
    return {
      fromItemLayout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 }
      }
    };
  },
  computed: {
    step() {
      return this.$store.state.form.step;
    }
  },
  methods: {
    onPrev() {
      this.$router.push("/form/step-form/info");
    },
    handleSubmit() {
      const { form, $store, step } = this;
      form.validateFields((err, values) => {
        if (!err) {
          $store.dispatch({
            type: "form/submitStepForm",
            payload: { ...step, ...values }
          });
        }
      });
    }
  }
};
</script>

<style></style>
