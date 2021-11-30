NOTE: This is a copy of the [hot-reload](https://github.com/GoogleContainerTools/skaffold/tree/main/examples/hot-reload) sample from the skaffold repository. It has been modified here to run on [Cloud Code](https://cloud.google.com/code). You can view this sample in its original context by visiting the [skaffold examples repo](https://github.com/skaffold/examples).

---
## Example: hot-reload with Node and Python

Application demonstrating the file synchronization mode with both NodeJS and Python.

Check out the [skaffold documentation](https://skaffold.dev/docs/pipeline-stages/filesync/) for more information on file sync.


### Init

Start the application by running the Cloud Code command "Run on Kubernetes". See the docs for [VS Code](https://cloud.google.com/code/docs/vscode/running-an-application#running_your_application), [IntelliJ](https://cloud.google.com/code/docs/intellij/deploying-a-k8-app#configuration), or [Cloud Shell](https://cloud.google.com/code/docs/shell/running-an-application#running_your_application) for instructions on launching run configurations with Cloud Code.

### Workflow

* Make some changes to `node/src/index.js`:
    * The file will be synchronized to the cluster
    * `nodemon` will restart the application
* Make some changes to `python/src/app.py`:
    * The file will be synchronized to the cluster
    * `flask` will restart the application
