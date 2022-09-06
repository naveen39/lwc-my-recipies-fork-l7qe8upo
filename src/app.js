import { LightningElement, track } from "lwc";

export default class TreeGridExpanded extends LightningElement {
  @track type = {
    label: "ACtion",
    type: "button",
    typeAttributes: {
      label: {
        fieldName: "buttonLabel1",
      },
      value: {
        fieldName: "buttonLabel1",
      },
      variant: {
        fieldName: "variant",
      },
      name: {
        fieldName: "buttonLabel1",
      },
      disabled: false,
      iconPosition: "left",
    },
  };
  @track columns = [
    {
      label: "CANS Assessment(s)",
      fieldName: "Name",
    },
    {
      label: "Type of Request",
      fieldName: "Type_of_Request__c",
    },
    {
      label: "Category",
      fieldName: "Assessment_Category__c",
    },
    {
      label: "Assessment Type",
      fieldName: "Assessment_Type__c",
    },
    {
      label: "Status",
      fieldName: "Status__c",
    },
    {
      label: "Created Date",
      fieldName: "CreatedDate",
      type: "date",
      typeAttributes: {
        day: "numeric",
        month: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        //,timezone : "UTC"
      },
    },
    {
      label: "",
      type: "button",
      typeAttributes: {
        label: {
          fieldName: "buttonLabel1",
        },
        value: {
          fieldName: "buttonLabel1",
        },
        variant: {
          fieldName: "variant",
        },
        name: {
          fieldName: "buttonLabel1",
        },
        disabled: false,
        iconPosition: "left",
      },
    },
    {
      lable: "label",
      type: "button",
      //typeAttributes: { fieldName: "typeAttributes" },
    },
  ];
  @track data = [
    {
      CANS_Recipient__c: "a2d3S0000002qB4QAI",
      Id: "a2b3S0000000JiRQAU",
      Name: "CANS-00000384",
      Type_of_Request__c: "Routine",
      Assessment_Type__c: "Brief",
      Assessment_Category__c: "Initial",
      Assessor_Agency__c: "Center for Innovative Practice, CWRU - Ohio",
      Status__c: "Completed",
      Submitted_Date__c: "2021-11-24",
      Care_Coordination_Recommendation__c: "Intensive",
      CreatedDate: "2021-11-24T17:53:44.000Z",
      CreatedById: "0053S000000WUZ9QAO",
      Grade__c: "2",
      ProviderType_FCFC__c: false,
      ProviderType_DYS__c: false,
      ProviderType_Title_IV_E_Agency__c: false,
      ProviderType_Hospital__c: true,
      ProviderType_DODD__c: false,
      ProviderType_CME__c: false,
      ProviderType_BH_Provider__c: false,
      ProviderType_MRSS__c: false,
      ProviderType_IHBT__c: false,
      ProviderType_PRTF__c: false,
      ProviderType_OHR_Plan__c: false,
      ProviderType_QRTP__c: false,
      ProviderType_PCSA__c: false,
      ProviderType_ODJFS__c: false,
      variant: "brand",
      buttonLabel1: "View",
      clonedlabel: "Clone",
      dataType: "button",
      label: "text",
    },

    {
      CANS_Recipient__c: "a2d3S0000002qB4QAI",
      Id: "a2b3S0000000JiRQ",
      Name: "CANS-00000384",
      Type_of_Request__c: "Routine",
      Assessment_Type__c: "Brief",
      Assessment_Category__c: "Initial",
      Assessor_Agency__c: "Center for Innovative Practice, CWRU - Ohio",
      Status__c: "Completed",
      Submitted_Date__c: "2021-11-24",
      Care_Coordination_Recommendation__c: "Intensive",
      CreatedDate: "2021-11-24T17:53:44.000Z",
      CreatedById: "0053S000000WUZ9QAO",
      Grade__c: "2",
      ProviderType_FCFC__c: false,
      ProviderType_DYS__c: false,
      ProviderType_Title_IV_E_Agency__c: false,
      ProviderType_Hospital__c: true,
      ProviderType_DODD__c: false,
      ProviderType_CME__c: false,
      ProviderType_BH_Provider__c: false,
      ProviderType_MRSS__c: false,
      ProviderType_IHBT__c: false,
      ProviderType_PRTF__c: false,
      ProviderType_OHR_Plan__c: false,
      ProviderType_QRTP__c: false,
      ProviderType_PCSA__c: false,
      ProviderType_ODJFS__c: false,
      variant: "brand",
      buttonLabel1: "View",
      clonedlabel: "Clone",
      dataType: "text",
    },
  ];
}
