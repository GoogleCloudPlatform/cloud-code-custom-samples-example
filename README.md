# Example Custom Sample Repository

This repository is an example [Custom Sample Repository](https://cloud.google.com/code/docs/vscode/set-up-template-repo?utm_source=ext&utm_medium=partner&utm_campaign=CDR_kri_gcp_cloudcodereadmes_012521&utm_content=-) that can be used with the Cloud Code plugins for [VSCode](https://cloud.google.com/code/docs/vscode/quickstart?utm_source=ext&utm_medium=partner&utm_campaign=CDR_kri_gcp_cloudcodereadmes_012521&utm_content=-) and [IntelliJ](https://cloud.google.com/code/docs/intellij/quickstart?utm_source=ext&utm_medium=partner&utm_campaign=CDR_kri_gcp_cloudcodereadmes_012521&utm_content=-).

--- 
## Contents

### .cctemplate
The `.cctemplate` is a [Sample Descriptor](https://cloud.google.com/code/docs/intellij/set-up-template-repo#template_descriptor_schema) file that describes the contents of your repository so that Cloud Code knows where to look for your samples. It should look something like the following:

```
{
    "metadata": {
        "version": "1"
    },
    "templates": [
        {
            "path": "path/to/my/sample",
            "name": "My Sample",
            "description": "This sample helps you create something amazing!"
        },
        ...
    ]
}
```

There is an example `.cctemplate` file in this repository that you can review, and you can learn more about the Sample Descriptor schema [here](https://cloud.google.com/code/docs/vscode/set-up-template-repo#template_descriptor_schema).

### hello-world

A simple sample written in Go. You can see an entry for this sample in the `.cctemplate` file.

### file-sync-example

An example application demonstrating skaffold's [file sync](https://skaffold.dev/docs/pipeline-stages/filesync/), which is used by Cloud Code under the hood. Changes to a file are copied to the container without needing to rebuild or restart the corresponding pod. The original version of this sample is located in the [skaffold examples repo](https://github.com/GoogleContainerTools/skaffold/examples/hot-reload). 

### kubernetes-custom-sample/nodejs

A Node.js sample with a frontend and backend service. This sample uses MongoDB as a database and runs on Kubernetes. You can see an entry for this sample in the `.cctemplate` file.

### bank-of-anthos

A copy of the [Bank of Anthos](https://github.com/GoogleCloudPlatform/bank-of-anthos) application, an HTTP-based web app that simulates a bank's payment processing network. This app demonstrates using Google Cloud Platform products to modernize enterprise applications. It's configured to run with any Kubernetes cluster in Cloud Code.

### bank-of-anthos/src/frontend

The frontend service for Bank of Anthos is included in the `.cctemplate` file as a separate sample. This is an example of how to use a subfolder in a repo as a separate Custom Sample.

---

## Usage

To see an example of how the Custom Sample feature of Cloud Code works, you can configure your IDE to recognize this repository and create applications based on the sample within. Follow the steps below to see Custom Sample in action!

1. Install Cloud Code for [IntelliJ](https://cloud.google.com/code/docs/intellij/install?utm_source=ext&utm_medium=partner&utm_campaign=CDR_kri_gcp_cloudcodereadmes_012521&utm_content=-) or [VS Code](https://cloud.google.com/code/docs/vscode/install?utm_source=ext&utm_medium=partner&utm_campaign=CDR_kri_gcp_cloudcodereadmes_012521&utm_content=-)

2. Import the Custom Sample repo on [IntelliJ](https://cloud.google.com/code/docs/intellij/create-app-from-custom-template?utm_source=ext&utm_medium=partner&utm_campaign=CDR_kri_gcp_cloudcodereadmes_012521&utm_content=-) or [VS Code](https://cloud.google.com/code/docs/vscode/create-app-from-custom-template?utm_source=ext&utm_medium=partner&utm_campaign=CDR_kri_gcp_cloudcodereadmes_012521&utm_content=-), using this repo's Git URL: `https://github.com/GoogleCloudPlatform/cloud-code-custom-samples-example.git`

You can create your own Custom Sample repo using this repository as a base.

1. Clone this repository

2. Create a new directory containing your own sample (or make changes to any of the sample samples)

3. Make any necessary updates to the samples in the `.cctemplate` file 

4. Import your local, updated repository into Cloud Code  


--- 

## Sign up for user research

We want to hear your feedback!

The Cloud Code team is inviting our user community to sign-up to participate in Google User Experience Research. 

If you’re invited to join a study, you may try out a new product or tell us what you think about the products you use every day. At this time, Google is only sending invitations for upcoming remote studies. Once a study is complete, you’ll receive a token of thanks for your participation such as a gift card or some Google swag. 

[Sign up using this link](https://google.qualtrics.com/jfe/form/SV_4Me7SiMewdvVYhL?reserved=1&utm_source=In-product&Q_Language=en&utm_medium=own_prd&utm_campaign=Q1&productTag=clou&campaignDate=January2021&referral_code=UXbT481079) and answer a few questions about yourself, as this will help our research team match you to studies that are a great fit.

---
## Contributing

Contributions welcome! Be sure to read our [contributing guide](./docs/contributing.md) and [Code of Conduct](./docs/code-of-conduct.md).