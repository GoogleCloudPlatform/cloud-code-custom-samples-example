# Example Custom Template Repository

This repository is an example [Custom Template Repository](https://cloud.google.com/code/docs/vscode/set-up-template-repo?utm_source=ext&utm_medium=partner&utm_campaign=CDR_kri_gcp_cloudcodereadmes_012521&utm_content=-) that can be used with the Cloud Code plugins for [VSCode](https://cloud.google.com/code/docs/vscode/quickstart?utm_source=ext&utm_medium=partner&utm_campaign=CDR_kri_gcp_cloudcodereadmes_012521&utm_content=-) and [IntelliJ](https://cloud.google.com/code/docs/intellij/quickstart?utm_source=ext&utm_medium=partner&utm_campaign=CDR_kri_gcp_cloudcodereadmes_012521&utm_content=-).

--- 
## Contents

### .cctemplate
The `.cctemplate` is a [Template Descriptor](https://cloud.google.com/code/docs/intellij/set-up-template-repo#template_descriptor_schema) file that describes the contents of your repository so that Cloud Code knows where to look for your templates. It should look something like the following:

```json
{
    "metadata": {
        "version": "1"
    },
    "templates": [
        {
            "path": "path/to/my/template",
            "name": "My Template",
            "description": "This template helps you create something amazing!"
        },
        ...
    ]
}
```

There is an example `.cctemplate` file in this repository that you can review, and you can learn more about the Template Descriptor schema [here](https://cloud.google.com/code/docs/vscode/set-up-template-repo#template_descriptor_schema).

### hello-world

A sample golang template. You can see an entry for this template in the `.cctemplate` file.

### kubernetes-custom-template/nodejs

A sample Node.js template with a frontend and backend service. This template uses MongoDB as a database and runs on Kubernetes. You can see an entry for this template in the `.cctemplate` file.

---

## Usage

To see an example of how the Custom Templates feature of Cloud Code works, you can configure your IDE to recognize this repository and create applications based on the templates within. Follow the steps below to see Custom Templates in action!

1. Install Cloud Code for [IntelliJ](https://cloud.google.com/code/docs/intellij/install?utm_source=ext&utm_medium=partner&utm_campaign=CDR_kri_gcp_cloudcodereadmes_012521&utm_content=-) or [VS Code](https://cloud.google.com/code/docs/vscode/install?utm_source=ext&utm_medium=partner&utm_campaign=CDR_kri_gcp_cloudcodereadmes_012521&utm_content=-)

2. Import the Custom Template repo on [IntelliJ](https://cloud.google.com/code/docs/intellij/create-app-from-custom-template?utm_source=ext&utm_medium=partner&utm_campaign=CDR_kri_gcp_cloudcodereadmes_012521&utm_content=-) or [VS Code](https://cloud.google.com/code/docs/vscode/create-app-from-custom-template?utm_source=ext&utm_medium=partner&utm_campaign=CDR_kri_gcp_cloudcodereadmes_012521&utm_content=-), using this repo's Git URL: `https://github.com/GoogleCloudPlatform/cloud-code-custom-templates-example.git`

You can create your own Custom Template repo using this repository as a base.

1. Clone this repository

2. Create a new directory containing your own template (or make changes to any of the sample templates)

3. Import your local, updated repository into Cloud Code

> Be sure to make any necessary updates to the `.cctemplate` file before importing your repository.


--- 

## Sign up for user research

We want to hear your feedback!

The Cloud Code team is inviting our user community to sign-up to participate in Google User Experience Research. 

If you’re invited to join a study, you may try out a new product or tell us what you think about the products you use every day. At this time, Google is only sending invitations for upcoming remote studies. Once a study is complete, you’ll receive a token of thanks for your participation such as a gift card or some Google swag. 

[Sign up using this link](https://google.qualtrics.com/jfe/form/SV_4Me7SiMewdvVYhL?reserved=1&utm_source=In-product&Q_Language=en&utm_medium=own_prd&utm_campaign=Q1&productTag=clou&campaignDate=January2021&referral_code=UXbT481079) and answer a few questions about yourself, as this will help our research team match you to studies that are a great fit.

---
## Contributing

Contributions welcome! Be sure to read our [contributing guide](./docs/contributing.md) and [Code of Conduct](./docs/code-of-conduct.md).