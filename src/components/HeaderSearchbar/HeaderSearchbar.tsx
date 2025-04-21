'use client';

import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

import styles from './headerSearchbar.module.scss';
import SearchIcon from "../../../public/SearchIcon";
import React from "react";
import useInput from "@/hooks/useInput";
import { useRouter, useSearchParams } from "next/navigation";

export const SEARCH_QUERY = "query";

type Props = {
    routePath?: string
}

const rerouteToSearchPageWith= (searchParam: string) => `/search/wallpapers?${SEARCH_QUERY}=${searchParam}`;

export default function HeaderSearchbar({ routePath }: Props) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const searchInputDefaultValue = searchParams.get(SEARCH_QUERY) || ''

    const { inputInnerProps } = useInput(searchInputDefaultValue);

    function onSearchHandler() {
        return router.push(rerouteToSearchPageWith(inputInnerProps.value));
    }

    return (
        <div className={styles['header']}>
            <div className={styles['header-searchbar']}>
                <SearchIcon />
                <Input placeholder="Search..." {...inputInnerProps} />
            </div>
            <Button variant="accent" size="md" disabled={!inputInnerProps.value} onClick={onSearchHandler}>Search</Button>
        </div>
    );
};