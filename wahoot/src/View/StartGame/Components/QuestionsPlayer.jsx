import { Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';


const QuestionsPlayer = ({ questionText }) => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h6">{questionText}</Typography>
            </CardContent>
        </Card>
    )
};

export default QuestionsPlayer;
