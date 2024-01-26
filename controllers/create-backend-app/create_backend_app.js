/**
 *  This file is responsible for generating a frontend application
 *  it takes in the folder the user has created and write into it the respected files
 *
 * */

// built in core node module for working with the file system
import fs from 'node:fs';
// built in core node module for working with the file path
import path from 'node:path';

// an external package to help me the directory where my npm package will be downloaded into
import globalModules from 'global-modules';

// my package name
const packageName = 'scalfold-fullstackapp'; // Replace with the name of your global package
// my package directory
const packageDirectory = path.join(globalModules, packageName);

function create_backend_application(folder_name) {
  // path to where the frontend application is stored this contains all the necessary files
  // to create the frontend application
  const appDirectoryToReadFrom = path.resolve(
    `${packageDirectory}/applications/backend`
  );

  //   ***************

  // path to where the folder the user has created
  const appDirectoryToWriteTo = path.resolve(`./${folder_name}`);

  // Step one read the frontend files from the frontend application folder
  fs.readdir(appDirectoryToReadFrom, (err, file) => {
    if (err) {
      throw new Error(err.message);
    }

    // loop through each file to read its content
    file.forEach((item) => {
      // check if a file is a directory
      if (fs.statSync(`${appDirectoryToReadFrom}/${item}`).isDirectory()) {
        // create a new directory in the application were trying to build that was created
        // more like creating a nested folder inside a folder
        fs.mkdirSync(`${appDirectoryToWriteTo}/${item}`);
        // read the content of the directory into the new directory you created

        fs.readdir(`${appDirectoryToReadFrom}/${item}`, (err, file) => {
          // check if there an error
          if (err) {
            throw new Error(err.message);
          }
          file.forEach((subFolderFile) => {
            // assign the content inside each of the file to a variable
            const subFolderContent = fs.readFileSync(
              path.resolve(
                `${appDirectoryToReadFrom}/${item}/${subFolderFile}`
              ),
              'utf-8'
            );

            // write the content as well to the new destination
            fs.writeFileSync(
              path.resolve(`${appDirectoryToWriteTo}/${item}/${subFolderFile}`),
              subFolderContent
            );
          });
        });

        return;
      }
      // ************************

      // read the content of each of the file
      let data = fs.readFileSync(`${appDirectoryToReadFrom}/${item}`, 'utf-8');

      //   lets modify the package.json before creating it
      if (item === 'package.json') {
        const updated_package = JSON.parse(data);
        updated_package.name = folder_name;

        // check which of the component library the user has chosen

        data = JSON.stringify(updated_package);
      }

      //   write to the folder the user has choosen;
      fs.writeFileSync(`${appDirectoryToWriteTo}/${item}`, data);
    });
  });
}

export { create_backend_application };
