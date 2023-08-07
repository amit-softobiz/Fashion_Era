"use client"

import { ApolloProvider } from "@apollo/client"
import client from '@/lib/apollo'
import React from "react";
export default function Provider({children}:{children:React.ReactNode}){
    return <ApolloProvider client={client} >{children}</ApolloProvider>
}