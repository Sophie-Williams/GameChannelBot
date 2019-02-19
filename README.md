# GameChannelBot

Discord bot to manage voice channels where you don't want to be interrupted by randoms. Ensures at least one user-limited channel of all team size types specified by admins exist.

In this example, the bot was responsible for creating all these channels as well as creating extra Duo channels as members occupied the other ones.

```
Gaming Channels
  - Duo (2/2)
  - Duo 2 (1/2)
  - Duo 3 (1/2)
  - Trio (0/3)
  - Squad (0/4)
```

This way there's always space to game with friends without being interrupted by others on the server.

## Usage

Just mention the server (`@GameChannelBot`) to get some help. Or use a help command `gc!help`.

### Change bot prefix

`gc!prefix <new_prefix>`

Default prefix is `gc!` (short for game channel). This command will set the prefix to whatever you want on your server. Must have an admin role to change. Not providing a prefix parameter will reset the prefix to the default.

### Set the default category for voice channels to be managed within.

`gc!set category <category_id>`

Sets the category all other bot commands will reference by default. Can be overridden within each `gc!add` command.

### Set the default maximum number of cloned channels to create

`gc!set max_clones <max_clones>`

Sets the maximum number of clones to use when adding a channel. Can be overwridden within each `gc!add` command. Default value is `-1` which is infinite.

### Add a voice channel to be managed by the bot

`gc!add <channel_name/channel_id> <max_users> <max_clones> <category_id>`

Adds a channel that will be managed/cloned according to the example at the top of this README. If a channel name is provided, a new channel will be created. If a channel id is provided, then that channel will be managed by the bot.

Optional

- `<max_clones>`
  - Default is the default set via `gc!set max_clones <max_clones>`. If that hasn't been set it's infinity.
- `<category_id>`
  - Default is the default set via `gc!set category <category_id>`. If that hasn't been set, it's whatever Discord defaults to.

### Remove a channel from being managed by the bot. Cleans up all cloned channels.

`gc!delete <channel_name/channel_id>`

Removes a managed voice channel and all of it's clones if they exist.
