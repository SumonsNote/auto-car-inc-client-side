import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate()

    const logout = () => {
        signOut(auth);
        navigate('/login')
    };
    return (
        <div class="navbar bg-base-100 px-16">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li tabindex="0">
                            <a class="justify-between">
                                Parent
                                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </a>
                            <ul class="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <Link to='/' class="btn btn-ghost normal-case text-xl">Auto Car Inc</Link>
            </div>
            <div class="navbar-end hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                    <li><Link to='/portfolio'>My Portfolio</Link></li>
                    <li>{user && <Link to='/dashboard'>Dashboard</Link>}</li>
                    <li>{
                        user ? <button onClick={logout}>Log Out</button>  :
                        <Link to='/login'>Login</Link>}</li>
                        <li><span>{user ? user.displayName : ''}</span></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;