'use client';

import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

import styles from './headerSearchbar.module.scss';
import SearchIcon from "../../../public/SearchIcon";
import React from "react";
import useInput from "@/hooks/useInput";
import { useRouter, useSearchParams } from "next/navigation";

export const SEARCH_QUERY = "search_query";

type Props = {
    routePath?: string
}


export default function HeaderSearchbar({ routePath }: Props) {
    const searchParams = useSearchParams();
    const router = useRouter();
    const searchInput = useInput()

    // TODO: Make service functions
    function onSearchHandler() {
        if (routePath) {
            return router.push(routePath + `?${SEARCH_QUERY}=` + searchInput.value);
        }

        return router.push(window.location.pathname + `?${SEARCH_QUERY}=${searchInput.value}`);
    }


    return (
        <div className={styles['header']}>
            <div className={styles['header-searchbar']}>
                <SearchIcon />
                <Input defaultValue={searchParams.get(SEARCH_QUERY) || ''} placeholder="Search..." {...searchInput} />
            </div>
            <Button variant="accent" size="md" disabled={!searchInput.value} onClick={onSearchHandler}>Search</Button>
        </div>
    );
};