import React, { useContext } from 'react'
import { AiFillAlipayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import ethIcon from "../images/ethIcon.png";
import { Loader } from './';
import { TransactionContext } from "../context/TransactionContext";

const commonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[auto] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({ placeholder, name, type, value }) => (
    <input 
        placeholder={placeholder}
        type={type}
        step="0.0001"
        value={value}
        onChange={(e) => handleChange(e, name)}
        className="my-2 rounded-sm p-2 outline-none bg-transparent text-white border-none text-small "
    />

)
const Welcome = () => {

    const { connectWallet } = useContext(TransactionContext);
    //console.log(value);

    const handleSubmit = () => {}

    return (
        <div className="flex w-full justify-center item-center">
            <div className="flex md:flex-row flex-col items-start justify-between md:p-20 px-4">
                <div className="flex flex-1 justify-start flex-col md:mr-20">
                    <h1 className="text-2xl sm:text-4xl text-white text-gradient py-1">
                        Send crypto <br /> across the world
                    </h1>
                    <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
                        Explore the crypto world. Aici ca si cum vindem bani ca ne permitem
                    </p>
                    <button
                    type="button"
                    onClick={connectWallet}
                    className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
                    >
                        <p className="text-white text-base font-semibold">
                            Connect wallet
                        </p>
                    </button>
                    <div className="grid sm:grid-cols-3 grid-cols-3 grid-cols-2 w-full mt-10">
                        <div className={`rounded-tl-2xl ${commonStyles}`}>
                            Javascript
                        </div>
                        <div className={commonStyles}>
                            React
                        </div>
                        <div className={`rounded-tr-2xl ${commonStyles}`}>
                            Solidity
                        </div>
                        <div className={`rounded-bl-2xl ${commonStyles}`}>
                            WEB 3.0
                        </div>
                        <div className={commonStyles}>
                            Decentralized
                        </div>
                        <div className={`rounded-br-2xl ${commonStyles}`}>
                            Blockchain
                        </div>
                    </div>
                </div>

                <div className="flex flex-col flex-1 items-center justify-start w-full md:mt-0 mt-10">
                    {/* <div className="p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card whit-glassmorphism">
                    </div> */}
                    <div className="p-3 justify-end items-start flex-col rounde-xl h-40">
                        <div className="flex justify-between flex-col">
                            <div className="w-20 h-20 items-center rounded-full border-2 border-white">
                                <SiEthereum fontSize={75} color="#fff" />
                                <div>
                                    <div className="absolute pt-12 pr-5 right-0 top-0">
                                    <BsInfoCircle fontSize={35} color="#fff" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="pt-5 text-white font-light text-sm">
                                Your crypto address is: 0xsdjfaos.....faser9a
                            </p>
                        </div>
                    </div>
                </div>
                <div className="p-5 sm:w-96 w-full flex flex-col justify-start item-center blue-glassmorphism">
                    <div className="h-[1px] 2-full bg-gray-400 my-2"/>

                    <Input placeholder="Address to" name="addressTo" type="text" hadleChange={() => {}}/>
                    <Input placeholder="Amount (ETH)" name="amount" type="number" hadleChange={() => {}}/>
                    <Input placeholder="Keyword (GIF)" name="keyword" type="text" hadleChange={() => {}}/>
                    <Input placeholder="Message" name="message" type="text" hadleChange={() => {}}/>

                    <div className="h-[1px] w-full bg-gray-400 my-2"/>

                    {false ? (
                        <Loader/>
                    ) : (
                        <button 
                            type="button"
                            onClick={handleSubmit}
                            className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer"
                        >
                            Send now
                        </button>
                    )}
                </div>
                
            </div>
        </div>
    </div>

        
    );
}

export default Welcome;