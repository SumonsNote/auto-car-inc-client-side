import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);

    const handleOrder = event => {
        event.preventDefault();
        const education = event.target.education.value;
        const location = event.target.location.value;
        const number = event.target.number.value;
        const linkedIn = event.target.linkedIn.value;

        const data = {
            education: education,
            location: location,
            number: number,
            linkedIn: linkedIn,
        }

        fetch('https://tranquil-sands-66866.herokuapp.com/profile', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

    }

    const [profile, setProfile] = useState([])
    useEffect(() => {
        fetch('https://tranquil-sands-66866.herokuapp.com/profile')
            .then(res => res.json())
            .then(data => setProfile(data))
    }, [])
    return (
        <div>
            <h1 class="text-4xl font-bold text-center my-10 text-secondary uppercase">My Profile</h1>
            <div className='border p-5'>
                <h4 class="text-xl font-bold text-center my-10 text-primary">Name: {user.displayName}</h4>
                <h4 class="text-xl font-bold text-center my-10 text-primary">Email: {user.email}</h4>
            </div>

            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Education</th>
                            <th>Location</th>
                            <th>Number</th>
                            <th>LinkedIn</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            profile.map(profile =>
                                <tr>
                                    <th></th>
                                    <td>{profile.education}</td>
                                    <td>{profile.location}</td>
                                    <td>{profile.number}</td>
                                    <td>{profile.linkedIn}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            <div class="card flex-shrink-0 w-full max-w-md shadow-2xl mx-auto my-10">
                <form onSubmit={handleOrder}>
                    <div class="card-body">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Education</span>
                            </label>
                            <input name='education' type="text" placeholder="Education" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Location</span>
                            </label>
                            <input name='location' type="text" placeholder="Location" class="input input-bordered" />
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Number</span>
                                </label>
                                <input name='number' type="text" placeholder="Number" class="input input-bordered" />
                            </div>
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">linkedIn</span>
                            </label>
                            <input name='linkedIn' type="text" placeholder="LinkedIn" class="input input-bordered" />
                        </div>
                        <div class="form-control mt-6">
                            <button type='submit' class="btn btn-primary">Save</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MyProfile;