'use client';

import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

import styles from './headerSearchbar.module.scss';
import SearchIcon from "../../../public/SearchIcon";
import React from "react";
import useInput from "@/components/HeaderSearchbar/useInput";

export default function HeaderSearchbar() {
    const searchInput = useInput();

    return (
        <div className={styles['header']}>
            <div className={styles['header-searchbar']}>
                <SearchIcon />
                <Input placeholder="Search..." {...searchInput} />
            </div>
            <Button variant="accent" size="md" disabled={!searchInput.value} onClick={() => {}}>Search</Button>
        </div>
    );
};