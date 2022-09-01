import React, { useEffect, useState} from 'react';
import { ethers } from 'ethers';
import { contractABI, contractAddress } from '../Utils/constants';

export const TransactionsContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);
    
    console.log(
        provider,
        signer,
        transactionContract
    )
}

export const TransactionProvider = ({ children }) => {
    return (
        <TransactionsContext.Provider>
            { children }
        </TransactionsContext.Provider>
    )
}