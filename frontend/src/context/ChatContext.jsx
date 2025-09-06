import axios from "axios";
import { createContext, useContext, useState,useEffect } from "react";
import { server } from "../main";
import toast from "react-hot-toast";

const ChatContext=createContext()

export const ChatProvider=({children})=>{

    const [messages,setMessages]=useState([]);
    const [prompt,setPrompt]=useState("");

   async function fetchResponse() {
if (!prompt.trim()) return;
     try {
       const response = await axios({
         url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAjCYYfGEIhaz_pHy0uVvRvPOr-enlp4Zg",
         method: "post",
         data: {
           contents: [{ parts: [{ text: prompt }] }],
         },
       });
       console.log("API Response:", response.data);

       const message = {
         question: prompt,
         answer:
           response["data"]["candidates"][0]["content"]["parts"][0]["text"],
       };

       setMessages((prev) => [...prev, message]);
        setPrompt(""); // Clear the prompt after sending
        const {data}=await axios.post(`${server}/api/chat/${selected}`,{
          question:prompt,
          answer:response["data"]["candidates"][0]["content"]["parts"][0]["text"],
        },{
          headers:{
            token:localStorage.getItem("token"),
          }
        })    
      } catch (error) {
       alert("Something went wrong");
       console.log(error);
     }
   }
 const [chats,setChats]=useState([]);
 const [selected,setSelectedChat]=useState(null);  
 async function fetchChats(){
  try{
    const {data}=await axios.get(`${server}/api/chat/all`,{
      headers:{
        token:localStorage.getItem("token"),
      }
    });
    setChats(data);
    // REMOVE this line:
    // setSelectedChat(data[0]._id || null);
    return data;
  }
  catch(error){
    console.log(error);
    return [];
  }
}
   const [createLod,setCreateLod]=useState(false);
async function createChat(){
  try{ 
    const {data}=await axios.post(`${server}/api/chat/new`,{},{
      headers:{
        token:localStorage.getItem("token")
      }
    });
    fetchChats();
    setCreateLod(false);
   
  }
  catch(error){
    console.log(error);
    toast.error("Something went wrong");
    setCreateLod(false);
  }

}
const [,setLoading]=useState(false);
async function fetchMessages() {
  if (!selected) {
    setMessages([]); // Clear messages if no chat is selected
    return;
  }
  setLoading(true);
  try {
    const { data } = await axios.get(`${server}/api/chat/${selected}`, {
      headers: {
        token: localStorage.getItem("token"),
      }
    });
    setMessages(data);
  } catch (error) {
    console.log(error);
  }
  setLoading(false);
}

  async function deleteChat(id){
  try{
    const {data: deleteData}=await axios.delete(`${server}/api/chat/${id}`,{
      headers:{
        token:localStorage.getItem("token"),
      }
    });
    toast.success(deleteData.message);
    const updatedChats = await fetchChats();
    if (updatedChats.length > 0) {
      setSelectedChat(updatedChats[0]._id); // Redirect to first chat
    } else {
      setSelectedChat(null); // No chats left
      setMessages([]);       // Clear messages
    }
  }
  catch(error){
    console.log(error);
    alert("Something went wrong");
  }
}

  useEffect(() => {
  fetchChats().then(data => {
    setSelectedChat(data[0]?._id || null);
  });
}, []);
   
  useEffect(() => {
  if (selected) {
    fetchMessages();
  } else {
    setMessages([]); // Clear messages if no chat is selected
  }
}, [selected]);

    return <ChatContext.Provider value={{fetchResponse,messages,prompt,setPrompt,chats,createChat,createLod,selected,setSelectedChat,deleteChat}}>{children}</ChatContext.Provider>
}

export const ChatData=()=> useContext(ChatContext);