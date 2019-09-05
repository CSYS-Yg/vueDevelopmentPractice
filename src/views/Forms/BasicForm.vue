<template>
  <div>
    <a-form :layout="formLayout">
      <a-form-item
        label="Form Layout"
        :label-col="formItemLayout.labelCol"
        :wrapper-col="formItemLayout.wrapperCol"
      >
        <a-radio-group
          default-value="horizontal"
          @change="handleFormLayoutChange"
        >
          <a-radio-button value="horizontal">
            Horizontal
          </a-radio-button>
          <a-radio-button value="vertical">
            Vertical
          </a-radio-button>
          <a-radio-button value="inline">
            Inline
          </a-radio-button>
        </a-radio-group>
      </a-form-item>
      <a-form-item
        label="Field A"
        :label-col="formItemLayout.labelCol"
        :wrapper-col="formItemLayout.wrapperCol"
        :validateStatus="firldAStatus"
        :help="fieldAHelp"
      >
        <a-input v-model="FieldA" placeholder="input placeholder" />
      </a-form-item>
      <a-form-item
        label="Field B"
        :label-col="formItemLayout.labelCol"
        :wrapper-col="formItemLayout.wrapperCol"
      >
        <a-input v-model="FieldB" placeholder="input placeholder" />
      </a-form-item>
      <a-form-item :wrapper-col="buttonItemLayout.wrapperCol">
        <a-button @click="handleSubmit" type="primary">
          Submit
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formLayout: "horizontal",
      FieldA: "",
      FieldB: "",
      firldAStatus: "",
      fieldAHelp: ""
    };
  },
  watch: {
    FieldA(val) {
      if (val.length <= 5) {
        this.firldAStatus = "error";
        this.fieldAHelp = "字符数需大于5个";
      } else {
        this.firldAStatus = "";
        this.fieldAHelp = "";
      }
    }
  },
  computed: {
    formItemLayout() {
      const { formLayout } = this;
      return formLayout === "horizontal"
        ? {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 }
          }
        : {};
    },
    buttonItemLayout() {
      const { formLayout } = this;
      return formLayout === "horizontal"
        ? {
            wrapperCol: { span: 14, offset: 4 }
          }
        : {};
    }
  },
  methods: {
    handleFormLayoutChange(e) {
      this.formLayout = e.target.value;
    },
    handleSubmit() {
      if (this.FieldA.length <= 5) {
        this.firldAStatus = "error";
        this.fieldAHelp = "字符数需大于5个";
      } else {
        console.log({
          FieldA: this.FieldA,
          FieldB: this.FieldB
        });
      }
    }
  }
};
</script>
