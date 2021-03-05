import React from 'react';

export function Presentation(){
    return (
        <React.Fragment>
            <p className="content animate__animated animate__bounceInUp">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, aut. Officiis veniam animi enim illum distinctio omnis architecto suscipit quibusdam recusandae reprehenderit. Est pariatur facere distinctio unde excepturi corporis illum.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque vel cum commodi enim, pariatur quo sapiente beatae nihil suscipit officia dignissimos libero perferendis totam labore corporis soluta ut. Nihil, explicabo.
            </p>
            <style jsx>{`
                .content {
                    font-size: 18px;
                }
            `}</style>
        </React.Fragment>
    )
}