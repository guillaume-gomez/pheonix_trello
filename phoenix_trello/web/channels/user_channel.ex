defmodule PhoenixTrello.UserChannel do
  use PhoenixTrello.Web, :channel

  def join("users:" <> _user_id, _params, socket) do
    {:ok, socket}
  end
end