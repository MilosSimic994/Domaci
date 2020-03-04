import LaunchList from "./components/launch_list";
import spaceInfo from "./components/header"
// import select from "./components/select"
const app=document.querySelector('#app');

// const header=Header()
const header=document.createElement('header');
const filters=document.createElement('section');
// const select = document.createElement('select')
// filters.appendChild(select())
const launch_list=LaunchList();

const footer=document.createElement('footer');

header.appendChild(spaceInfo())
spaceInfo

app.append(header,filters,launch_list,footer);

