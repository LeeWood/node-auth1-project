- DB will revolve arount projects, tasks, and resource.
  - Projects will have multiple tasks,
  - tasks will only belong to one proj.
  - resources are added thing in each project.

# TABLES:
Users:
- [ ] id
- [ ] username (unique, required)
- [ ] password (required)

# Setup order:
- [x] npm init
- [x] yarn add dependencies
- [x] make sure script file is set up so nodemon runs with server command
- [x] knex init and set up knex file...
- [x] run migration make for migrations files
- [x] visually plan out schema based on MVP requirements :D 
- [x] write up and down migration functions to create tables
- [x] knex migrate:latest to make db3 file...
- [x] check set up on SQLite Studio to make sure it's all kosher
- [NA] run knex:seed make for all seed files in the order they are created in the migration files.
- [NA] write seed code.
- [NA] knex seed:run
- [x] check that data is correct and in place in SQLite Studio.
- [x] set up first table router and model files.
- [x] Set up server files...db-config.js (in data folder), index.js (root), and server.js (root) files.
- [x] check that server runs
- [ ] build endpoints and auth check middleware