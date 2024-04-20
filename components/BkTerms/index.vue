<script setup lang="ts">
import { 
  relevantInformation, 
  license, 
  unauthorizedUse, 
  property, 
  refundAndGuaranteePolicy, 
  antiFraudCheck,
  privacyPolicy 
} from '@/utils/PrivacyPolicy';

const relevantInformationArr = relevantInformation.split('\n\n');
const relevantInformationTitle = relevantInformationArr.shift();
const licenseArr = license.split('\n\n');
const licenseTitle = licenseArr.shift();
const unauthorizedUseArr = unauthorizedUse.split('\n\n');
const unauthorizedUseTitle = unauthorizedUseArr.shift();
const propertyArr = property.split('\n\n');
const propertyTitle = propertyArr.shift();
const refundAndGuaranteePolicyArr = refundAndGuaranteePolicy.split('\n\n');
const refundAndGuaranteePolicyTitle = refundAndGuaranteePolicyArr.shift();
const antiFraudCheckArr = antiFraudCheck.split('\n\n');
const antiFraudCheckTitle = antiFraudCheckArr.shift();
const privacyPolicyArr = privacyPolicy.split('\n\n');
const privacyPolicyTitle = privacyPolicyArr.shift();
</script>

<template>
  <div>
    <BkTermsModel
      :title="(relevantInformationTitle as string)"
      :content="relevantInformationArr" />
    <BkTermsModel
      :title="(licenseTitle as string)"
      :content="licenseArr" />
    <BkTermsModel
      :title="(unauthorizedUseTitle as string)"
      :content="unauthorizedUseArr" />
    <BkTermsModel
      :title="(propertyTitle as string)"
      :content="propertyArr" />
    <BkTermsModel
      :title="(refundAndGuaranteePolicyTitle as string)"
      :content="refundAndGuaranteePolicyArr" />
    <BkTermsModel
      :title="(antiFraudCheckTitle as string)"
      :content="antiFraudCheckArr" />
    <BkTermsModel
      :title="(privacyPolicyTitle as string)"
      :content="privacyPolicyArr" />
  </div>
</template>