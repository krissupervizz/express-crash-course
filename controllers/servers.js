let servers = [
  {id: '1', name: 'IT-квантум', status: 'открыт'},
  {id: '2', name: 'VR/AR квантум', status: 'идут занятия'},
  {id: '3', name: 'Медиаквантум', status: 'закрыт'},
  {id: '4', name: 'Энерджиквантум', status: 'идут занятия'},
  {id: '5', name: 'ПромРобоквантум', status: 'идут занятия'}
]

export const getAll = (req, res) => {
  res.status(200).json(servers)
}

export const create = (req, res) => {
  const newServer = {
    id: Date.now().toString(),
    ...req.body
  }
  servers.push(newServer)
  res.status(201).json(newServer)
}

export const remove = (req, res) => {
  servers = servers.filter(s => s.id !== req.params.id)
  res.json({message: 'Server has been removed.'})
}

export const change_status(req, res) => {

}
