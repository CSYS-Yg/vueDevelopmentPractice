<template>
  <div>
    <a-form layout="horizontal" :form="form">
      <a-form-item
        label="付款账户"
        :label-col="fromItemLayout.labelCol"
        :wrapper-col="fromItemLayout.wrapperCol"
      >
        <a-input
          v-decorator="[
            'payAccount',
            {
              initialValue: step.payAccount,
              rules: [
                {
                  required: true,
                  message: '请输入付款账号'
                }
              ]
            }
          ]"
        ></a-input>
      </a-form-item>
      <a-form-item
        label="收款账户"
        :label-col="fromItemLayout.labelCol"
        :wrapper-col="fromItemLayout.wrapperCol"
      >
        <ReceiverAccount
          v-decorator="[
            'receiveAccount',
            {
              initialValue: step.receiveAccount,
              rules: [
                {
                  required: true,
                  message: '请输入收款账户',
                  validator: (rule, value, callback) => {
                    if (value && value.number) {
                      callback();
                    } else {
                      callback(false);
                    }
                  }
                }
              ]
            }
          ]"
        ></ReceiverAccount>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" @click="handleSubmit">下一步</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import ReceiverAccount from "@/components/ReceiverAccount.vue";
export default {
  components: {
    ReceiverAccount
  },
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
    handleSubmit() {
      const { form, $router, $store } = this;
      form.validateFields((err, values) => {
        if (!err) {
          $store.commit({
            type: "form/saveStepFormData",
            payload: values
          });
          $router.push("/form/step-form/confirm");
        }
      });
    }
  }
};
</script>

<style></style>
