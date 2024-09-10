if [{$ENV = "PROD"}]; then
    npm run build
    serve -s build
else
    npm start
fi