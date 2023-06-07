// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract MyToken is ERC721, ERC721Burnable, Ownable {
    using Strings for *;
    using Counters for Counters.Counter;    
        Counters.Counter private _tokenIdCounter;    
        constructor() ERC721("MyToken", "MTK") {
        _tokenIdCounter.increment();
    }
    string public _baseURIextended = "https://galverse.art/api/metadata/";    
    
    function safeMint(address to) public onlyOwner {uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
    }    
    
    function tokenURI(uint256 tokenId)
        public
        view
        virtual
        override
        returns (string memory)
    {
        require(tokenId <= _tokenIdCounter.current(), "Nonexistent token");
        return string(abi.encodePacked(_baseURIextended, tokenId.toString(), ".json"));
    }
    function getAllTokenId() external view returns(uint256){
        return _tokenIdCounter.current();
    }
}