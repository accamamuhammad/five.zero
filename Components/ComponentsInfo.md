### This contains data about the components of the application

- ✅ = has been added
- 🛑 = will be added

## Get File Data Group

1. `MainSelectFileArea.tsx` - This is were the `DefaultUploadArea.tsx` & `DefaultUploadArea.tsx` will be toggle ✅
2. `DefaultUploadArea.tsx` - This is the deafult look of the uploadArea ✅
3. `UploadFileArea` - This contains all the File Data ✅
4. `ChooseFile.tsx` - This is were a file is choosen ✅
5. `SelectAction.tsk` - This is were the user chooses what action to perform ✅

## How to pass data from child to parent (hack)

- refrence: anya kubo (youtube)

### Steps

1. import useState & the child component into the parent component
2. in the parent component create a useSate function to recive the data `e.g const [dataFromChild, setDataFromChild] = useState("default")`
3. In the child components pass props in its function
4. And add a button to pass the data `e.g  onChange={(e) => props.handlePassingData(Data)}`
5. And finally in the parent component add the the following prop to the child component `handlePassingData={(data) => setDataFromChild(data)}`
