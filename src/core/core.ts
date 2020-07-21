import { Docker, Options } from 'docker-cli-js';
import path from 'path';

export class Core{
    public async run(){
        console.log("Core starting... ");

        await this.onRun();

        console.log("Core started \n");
    }

    public async close() {
        console.log("Core closing...");


        await this.onClose();

    console.log("Core closed \n"); 

    }

    async onRun() {
        console.log("Started");

        const options = new Options(
            /* machineName */ "dockerTest",
            /* currentWorkingDirectory */ path.join(__dirname, '..', 'test', 'nginx'),
            /* echo*/ true,
          );

          let docker = new Docker(options);

          docker.command('build -t nginximg .').then(function (data) {
            console.log('data = ', data);
          });    

    }

    async onClose() {
        console.log("Closed");
    }
}