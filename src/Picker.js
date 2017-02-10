import React, { Component } from 'react'
import styled from 'styled-components'

/* list of emoji's sourced from http://getemoji.com */
const PEOPLE_EMOJIS = ['😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '☺️', '😊', '😇', '🙂', '🙃', '😉', '😌', '😍', '😘', '😗', '😙', '😚', '😋', '😜', '😝', '😛', '🤑', '🤗', '🤓', '😎', '🤡', '🤠', '😏', '😒', '😞', '😔', '😟', '😕', '🙁', '☹️', '😣', '😖', '😫', '😩', '😤', '😠', '😡', '😶', '😐', '😑', '😯', '😦', '😧', '😮', '😲', '😵', '😳', '😱', '😨', '😰', '😢', '😥', '🤤', '😭', '😓', '😪', '😴', '🙄', '🤔', '🤥', '😬', '🤐', '🤢', '🤧', '😷', '🤒', '🤕', '😈', '👿', '👹', '👺', '💩', '👻', '💀', '☠️', '👽', '👾', '🤖', '🎃', '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '😿', '😾', '👐', '🙌', '👏', '🙏', '🤝', '👍', '👎', '👊', '✊', '🤛', '🤜', '🤞', '✌️', '🤘', '👌', '👈', '👉', '👆', '👇', '☝️', '✋', '🤚', '🖐', '🖖', '👋', '🤙', '💪', '🖕', '✍️', '🤳', '💅', '🖖', '💄', '💋', '👄', '👅', '👂', '👃', '👣', '👁', '👀', '🗣', '👤', '👥v 👶', '👦', '👧', '👨', '👩', '👱‍♀️', '👱', '👴', '👵', '👲', '👳‍♀️', '👳', '👮‍♀️', '👮', '👷‍♀️', '👷', '💂‍♀️', '💂', '🕵️‍♀️', '🕵️', '👩‍⚕️', '👨‍⚕️', '👩‍🌾', '👨‍🌾', '👩‍🍳', '👨‍🍳', '👩‍🎓', '👨‍🎓', '👩‍🎤', '👨‍🎤', '👩‍🏫', '👨‍🏫', '👩‍🏭', '👨‍🏭', '👩‍💻', '👨‍💻', '👩‍💼', '👨‍💼', '👩‍🔧', '👨‍🔧', '👩‍🔬', '👨‍🔬', '👩‍🎨', '👨‍🎨', '👩‍🚒', '👨‍🚒', '👩‍✈️', '👨‍✈️', '👩‍🚀', '👨‍🚀', '👩‍⚖️', '👨‍⚖️', '🤶', '🎅', '👸', '🤴', '👰', '🤵', '👼', '🤰', '🙇‍♀️', '🙇', '💁', '💁‍♂️', '🙅', '🙅‍♂️', '🙆', '🙆‍♂️', '🙋', '🙋‍♂️', '🤦‍♀️', '🤦‍♂️', '🤷‍♀️', '🤷‍♂️', '🙎', '🙎‍♂️', '🙍', '🙍‍♂️', '💇', '💇‍♂️', '💆', '💆‍♂️', '🕴', '💃', '🕺', '👯', '👯‍♂️', '🚶‍♀️', '🚶', '🏃‍♀️', '🏃', '👫', '👭', '👬', '💑', '👩‍❤️‍👩', '👨‍❤️‍👨', '💏', '👩‍❤️‍💋‍👩', '👨‍❤️‍💋‍👨', '👪', '👨‍👩‍👧', '👨‍👩‍👧‍👦', '👨‍👩‍👦‍👦', '👨‍👩‍👧‍👧', '👩‍👩‍👦', '👩‍👩‍👧', '👩‍👩‍👧‍👦', '👩‍👩‍👦‍👦', '👩‍👩‍👧‍👧', '👨‍👨‍👦', '👨‍👨‍👧', '👨‍👨‍👧‍👦', '👨‍👨‍👦‍👦', '👨‍👨‍👧‍👧', '👩‍👦', '👩‍👧', '👩‍👧‍👦', '👩‍👦‍👦', '👩‍👧‍👧', '👨‍👦', '👨‍👧', '👨‍👧‍👦', '👨‍👦‍👦', '👨‍👧‍👧', '👚', '👕', '👖', '👔', '👗', '👙', '👘', '👠', '👡', '👢', '👞', '👟', '👒', '🎩', '🎓', '👑', '⛑', '🎒', '👝', '👛', '👜', '💼', '👓', '🕶', '🌂', '☂️', '👐🏽', '🙌🏽', '👏🏽', '🙏🏽', '👍🏽', '👎🏽', '👊🏽', '✊🏽', '🤛🏽', '🤜🏽', '🤞🏽', '✌🏽', '🤘🏽', '👌🏽', '👈🏽', '👉🏽', '👆🏽', '👇🏽', '☝🏽', '✋🏽', '🤚🏽', '🖐🏽', '🖖🏽', '👋🏽', '🤙🏽', '💪🏽', '🖕🏽', '✍🏽', '🤳🏽', '💅🏽', '👂🏽', '👃🏽', '👶🏽', '👦🏽', '👧🏽', '👨🏽', '👩🏽', '👱🏽‍♀️', '👱🏽', '👴🏽', '👵🏽', '👲🏽', '👳🏽‍♀️', '👳🏽', '👮🏽‍♀️', '👮🏽', '👷🏽‍♀️', '👷🏽', '💂🏽‍♀️', '💂🏽', '🕵🏽‍♀️', '🕵🏽', '👩🏽‍⚕️', '👨🏽‍⚕️', '👩🏽‍🌾', '👨🏽‍🌾', '👩🏽‍🍳', '👨🏽‍🍳', '👩🏽‍🎓', '👨🏽‍🎓', '👩🏽‍🎤', '👨🏽‍🎤', '👩🏽‍🏫', '👨🏽‍🏫', '👩🏽‍🏭', '👨🏽‍🏭', '👩🏽‍💻', '👨🏽‍💻', '👩🏽‍💼', '👨🏽‍💼', '👩🏽‍🔧', '👨🏽‍🔧', '👩🏽‍🔬', '👨🏽‍🔬', '👩🏽‍🎨', '👨🏽‍🎨', '👩🏽‍🚒', '👨🏽‍🚒', '👩🏽‍✈️', '👨🏽‍✈️', '👩🏽‍🚀', '👨🏽‍🚀', '👩🏽‍⚖️', '👨🏽‍⚖️', '🤶🏽', '🎅🏽', '👸🏽', '🤴🏽', '👰🏽', '🤵🏽', '👼🏽', '🤰🏽', '🙇🏽‍♀️', '🙇🏽', '💁🏽', '💁🏽‍♂️', '🙅🏽', '🙅🏽‍♂️', '🙆🏽', '🙆🏽‍♂️', '🙋🏽', '🙋🏽‍♂️', '🤦🏽‍♀️', '🤦🏽‍♂️', '🤷🏽‍♀️', '🤷🏽‍♂️', '🙎🏽', '🙎🏽‍♂️', '🙍🏽', '🙍🏽‍♂️', '💇🏽', '💇🏽‍♂️', '💆🏽', '💆🏽‍♂️', '🕴🏼', '💃🏽', '🕺🏽', '🚶🏽‍♀️', '🚶🏽', '🏃🏽‍♀️', '🏃🏽', '🏋🏽‍♀️', '🏋🏽', '🤸🏽‍♀️', '🤸🏽‍♂️', '⛹🏽‍♀️', '⛹🏽', '🤾🏽‍♀️', '🤾🏽‍♂️', '🏌🏽‍♀️', '🏌🏽', '🏄🏽‍♀️', '🏄🏽', '🏊🏽‍♀️', '🏊🏽', '🤽🏽‍♀️', '🤽🏽‍♂️', '🚣🏽‍♀️', '🚣🏽', '🏇🏽', '🚴🏽‍♀️', '🚴🏽', '🚵🏽‍♀️', '🚵🏽', '🤹🏽‍♀️', '🤹🏽‍♂️', '🛀🏽', '👐🏻', '🙌🏻', '👏🏻', '🙏🏻', '👍🏻', '👎🏻', '👊🏻', '✊🏻', '🤛🏻', '🤜🏻', '🤞🏻', '✌🏻', '🤘🏻', '👌🏻', '👈🏻', '👉🏻', '👆🏻', '👇🏻', '☝🏻', '✋🏻', '🤚🏻', '🖐🏻', '🖖🏻', '👋🏻', '🤙🏻', '💪🏻', '🖕🏻', '✍🏻', '🤳🏻', '💅🏻', '👂🏻', '👃🏻', '👶🏻', '👦🏻', '👧🏻', '👨🏻', '👩🏻', '👱🏻‍♀️', '👱🏻', '👴🏻', '👵🏻', '👲🏻', '👳🏻‍♀️', '👳🏻', '👮🏻‍♀️', '👮🏻', '👷🏻‍♀️', '👷🏻', '💂🏻‍♀️', '💂🏻', '🕵🏻‍♀️', '🕵🏻', '👩🏻‍⚕️', '👨🏻‍⚕️', '👩🏻‍🌾', '👨🏻‍🌾', '👩🏻‍🍳', '👨🏻‍🍳', '👩🏻‍🎓', '👨🏻‍🎓', '👩🏻‍🎤', '👨🏻‍🎤', '👩🏻‍🏫', '👨🏻‍🏫', '👩🏻‍🏭', '👨🏻‍🏭', '👩🏻‍💻', '👨🏻‍💻', '👩🏻‍💼', '👨🏻‍💼', '👩🏻‍🔧', '👨🏻‍🔧', '👩🏻‍🔬', '👨🏻‍🔬', '👩🏻‍🎨', '👨🏻‍🎨', '👩🏻‍🚒', '👨🏻‍🚒', '👩🏻‍✈️', '👨🏻‍✈️', '👩🏻‍🚀', '👨🏻‍🚀', '👩🏻‍⚖️', '👨🏻‍⚖️', '🤶🏻', '🎅🏻', '👸🏻', '🤴🏻', '👰🏻', '🤵🏻', '👼🏻', '🤰🏻', '🙇🏻‍♀️', '🙇🏻', '💁🏻', '💁🏻‍♂️', '🙅🏻', '🙅🏻‍♂️', '🙆🏻', '🙆🏻‍♂️', '🙋🏻', '🙋🏻‍♂️', '🤦🏻‍♀️', '🤦🏻‍♂️', '🤷🏻‍♀️', '🤷🏻‍♂️', '🙎🏻', '🙎🏻‍♂️', '🙍🏻', '🙍🏻‍♂️', '💇🏻', '💇🏻‍♂️', '💆🏻', '💆🏻‍♂️', '🕴🏻', '💃🏻', '🕺🏻', '🚶🏻‍♀️', '🚶🏻', '🏃🏻‍♀️', '🏃🏻', '🏋🏻‍♀️', '🏋🏻', '🤸🏻‍♀️', '🤸🏻‍♂️', '⛹🏻‍♀️', '⛹🏻', '🤾🏻‍♀️', '🤾🏻‍♂️', '🏌🏻‍♀️', '🏌🏻', '🏄🏻‍♀️', '🏄🏻', '🏊🏻‍♀️', '🏊🏻', '🤽🏻‍♀️', '🤽🏻‍♂️', '🚣🏻‍♀️', '🚣🏻', '🏇🏻', '🚴🏻‍♀️', '🚴🏻', '🚵🏻‍♀️', '🚵🏻', '🤹🏻‍♀️', '🤹🏻‍♂️', '🛀🏻', '👐🏼', '🙌🏼', '👏🏼', '🙏🏼', '👍🏼', '👎🏼', '👊🏼', '✊🏼', '🤛🏼', '🤜🏼', '🤞🏼', '✌🏼', '🤘🏼', '👌🏼', '👈🏼', '👉🏼', '👆🏼', '👇🏼', '☝🏼', '✋🏼', '🤚🏼', '🖐🏼', '🖖🏼', '👋🏼', '🤙🏼', '💪🏼', '🖕🏼', '✍🏼', '🤳🏼', '💅🏼', '👂🏼', '👃🏼', '👶🏼', '👦🏼', '👧🏼', '👨🏼', '👩🏼', '👱🏼‍♀️', '👱🏼', '👴🏼', '👵🏼', '👲🏼', '👳🏼‍♀️', '👳🏼', '👮🏼‍♀️', '👮🏼', '👷🏼‍♀️', '👷🏼', '💂🏼‍♀️', '💂🏼', '🕵🏼‍♀️', '🕵🏼', '👩🏼‍⚕️', '👨🏼‍⚕️', '👩🏼‍🌾', '👨🏼‍🌾', '👩🏼‍🍳', '👨🏼‍🍳', '👩🏼‍🎓', '👨🏼‍🎓', '👩🏼‍🎤', '👨🏼‍🎤', '👩🏼‍🏫', '👨🏼‍🏫', '👩🏼‍🏭', '👨🏼‍🏭', '👩🏼‍💻', '👨🏼‍💻', '👩🏼‍💼', '👨🏼‍💼', '👩🏼‍🔧', '👨🏼‍🔧', '👩🏼‍🔬', '👨🏼‍🔬', '👩🏼‍🎨', '👨🏼‍🎨', '👩🏼‍🚒', '👨🏼‍🚒', '👩🏼‍✈️', '👨🏼‍✈️', '👩🏼‍🚀', '👨🏼‍🚀', '👩🏼‍⚖️', '👨🏼‍⚖️', '🤶🏼', '🎅🏼', '👸🏼', '🤴🏼', '👰🏼', '🤵🏼', '👼🏼', '🤰🏼', '🙇🏼‍♀️', '🙇🏼', '💁🏼', '💁🏼‍♂️', '🙅🏼', '🙅🏼‍♂️', '🙆🏼', '🙆🏼‍♂️', '🙋🏼', '🙋🏼‍♂️', '🤦🏼‍♀️', '🤦🏼‍♂️', '🤷🏼‍♀️', '🤷🏼‍♂️', '🙎🏼', '🙎🏼‍♂️', '🙍🏼', '🙍🏼‍♂️', '💇🏼', '💇🏼‍♂️', '💆🏼', '💆🏼‍♂️', '🕴🏼', '💃🏼', '🕺🏼', '🚶🏼‍♀️', '🚶🏼', '🏃🏼‍♀️', '🏃🏼', '🏋🏼‍♀️', '🏋🏼', '🤸🏼‍♀️', '🤸🏼‍♂️', '⛹🏼‍♀️', '⛹🏼', '🤾🏼‍♀️', '🤾🏼‍♂️', '🏌🏼‍♀️', '🏌🏼', '🏄🏼‍♀️', '🏄🏼', '🏊🏼‍♀️', '🏊🏼', '🤽🏼‍♀️', '🤽🏼‍♂️', '🚣🏼‍♀️', '🚣🏼', '🏇🏼', '🚴🏼‍♀️', '🚴🏼', '🚵🏼‍♀️', '🚵🏻', '🤹🏼‍♀️', '🤹🏼‍♂️', '🛀🏼', '👐🏾', '🙌🏾', '👏🏾', '🙏🏾', '👍🏾', '👎🏾', '👊🏾', '✊🏾', '🤛🏾', '🤜🏾', '🤞🏾', '✌🏾', '🤘🏾', '👌🏾', '👈🏾', '👉🏾', '👆🏾', '👇🏾', '☝🏾', '✋🏾', '🤚🏾', '🖐🏾', '🖖🏾', '👋🏾', '🤙🏾', '💪🏾', '🖕🏾', '✍🏾', '🤳🏾', '💅🏾', '👂🏾', '👃🏾', '👶🏾', '👦🏾', '👧🏾', '👨🏾', '👩🏾', '👱🏾‍♀️', '👱🏾', '👴🏾', '👵🏾', '👲🏾', '👳🏾‍♀️', '👳🏾', '👮🏾‍♀️', '👮🏾', '👷🏾‍♀️', '👷🏾', '💂🏾‍♀️', '💂🏾', '🕵🏾‍♀️', '🕵🏾', '👩🏾‍⚕️', '👨🏾‍⚕️', '👩🏾‍🌾', '👨🏾‍🌾', '👩🏾‍🍳', '👨🏾‍🍳', '👩🏾‍🎓', '👨🏾‍🎓', '👩🏾‍🎤', '👨🏾‍🎤', '👩🏾‍🏫', '👨🏾‍🏫', '👩🏾‍🏭', '👨🏾‍🏭', '👩🏾‍💻', '👨🏾‍💻', '👩🏾‍💼', '👨🏾‍💼', '👩🏾‍🔧', '👨🏾‍🔧', '👩🏾‍🔬', '👨🏾‍🔬', '👩🏾‍🎨', '👨🏾‍🎨', '👩🏾‍🚒', '👨🏾‍🚒', '👩🏾‍✈️', '👨🏾‍✈️', '👩🏾‍🚀', '👨🏾‍🚀', '👩🏾‍⚖️', '👨🏾‍⚖️', '🤶🏾', '🎅🏾', '👸🏾', '🤴🏾', '👰🏾', '🤵🏾', '👼🏾', '🤰🏾', '🙇🏾‍♀️', '🙇🏾', '💁🏾', '💁🏾‍♂️', '🙅🏾', '🙅🏾‍♂️', '🙆🏾', '🙆🏾‍♂️', '🙋🏾', '🙋🏾‍♂️', '🤦🏾‍♀️', '🤦🏾‍♂️', '🤷🏾‍♀️', '🤷🏾‍♂️', '🙎🏾', '🙎🏾‍♂️', '🙍🏾', '🙍🏾‍♂️', '💇🏾', '💇🏾‍♂️', '💆🏾', '💆🏾‍♂️', '🕴🏾', '💃🏾', '🕺🏾', '🚶🏾‍♀️', '🚶🏾', '🏃🏾‍♀️', '🏃🏾', '🏋🏾‍♀️', '🏋🏾', '🤸🏾‍♀️', '🤸🏾‍♂️', '⛹🏾‍♀️', '⛹🏾', '🤾🏾‍♀️', '🤾🏾‍♂️', '🏌🏾‍♀️', '🏌🏾', '🏄🏾‍♀️', '🏄🏾', '🏊🏾‍♀️', '🏊🏾', '🤽🏾‍♀️', '🤽🏾‍♂️', '🚣🏾‍♀️', '🚣🏾', '🏇🏾', '🚴🏾‍♀️', '🚴🏾', '🚵🏾‍♀️', '🚵🏾', '🤹🏾‍♀️', '🤹🏾‍♂️', '🛀🏾', '👐🏿', '🙌🏿', '👏🏿', '🙏🏿', '👍🏿', '👎🏿', '👊🏿', '✊🏿', '🤛🏿', '🤜🏿', '🤞🏿', '✌🏿', '🤘🏿', '👌🏿', '👈🏿', '👉🏿', '👆🏿', '👇🏿', '☝🏿', '✋🏿', '🤚🏿', '🖐🏿', '🖖🏿', '👋🏿', '🤙🏿', '💪🏿', '🖕🏿', '✍🏿', '🤳🏿', '💅🏿', '👂🏿', '👃🏿', '👶🏿', '👦🏿', '👧🏿', '👨🏿', '👩🏿', '👱🏿‍♀️', '👱🏿', '👴🏿', '👵🏿', '👲🏿', '👳🏿‍♀️', '👳🏿', '👮🏿‍♀️', '👮🏿', '👷🏿‍♀️', '👷🏿', '💂🏿‍♀️', '💂🏿', '🕵🏿‍♀️', '🕵🏿', '👩🏿‍⚕️', '👨🏿‍⚕️', '👩🏿‍🌾', '👨🏿‍🌾', '👩🏿‍🍳', '👨🏿‍🍳', '👩🏿‍🎓', '👨🏿‍🎓', '👩🏿‍🎤', '👨🏿‍🎤', '👩🏿‍🏫', '👨🏿‍🏫', '👩🏿‍🏭', '👨🏿‍🏭', '👩🏿‍💻', '👨🏿‍💻', '👩🏿‍💼', '👨🏿‍💼', '👩🏿‍🔧', '👨🏿‍🔧', '👩🏿‍🔬', '👨🏿‍🔬', '👩🏿‍🎨', '👨🏿‍🎨', '👩🏿‍🚒', '👨🏿‍🚒', '👩🏿‍✈️', '👨🏿‍✈️', '👩🏿‍🚀', '👨🏿‍🚀', '👩🏿‍⚖️', '👨🏿‍⚖️', '🤶🏿', '🎅🏿', '👸🏿', '🤴🏿', '👰🏿', '🤵🏿', '👼🏿', '🤰🏿', '🙇🏿‍♀️', '🙇🏿', '💁🏿', '💁🏿‍♂️', '🙅🏿', '🙅🏿‍♂️', '🙆🏿', '🙆🏿‍♂️', '🙋🏿', '🙋🏿‍♂️', '🤦🏿‍♀️', '🤦🏿‍♂️', '🤷🏿‍♀️', '🤷🏿‍♂️', '🙎🏿', '🙎🏿‍♂️', '🙍🏿', '🙍🏿‍♂️', '💇🏿', '💇🏿‍♂️', '💆🏿', '💆🏿‍♂️', '🕴🏿', '💃🏿', '🕺🏿', '🚶🏿‍♀️', '🚶🏿', '🏃🏿‍♀️', '🏃🏿', '🏋🏿‍♀️', '🏋🏿', '🤸🏿‍♀️', '🤸🏿‍♂️', '⛹🏿‍♀️', '⛹🏿', '🤾🏿‍♀️', '🤾🏿‍♂️', '🏌🏿‍♀️', '🏌🏿', '🏄🏿‍♀️', '🏄🏿', '🏊🏿‍♀️', '🏊🏿', '🤽🏿‍♀️', '🤽🏿‍♂️', '🚣🏿‍♀️', '🚣🏿', '🏇🏿', '🚴🏿‍♀️', '🚴🏿', '🚵🏿‍♀️', '🚵🏿', '🤹🏿‍♀️', '🤹🏿‍♂️', '🛀🏿']
const ANIMALS_NATURE_EMOJIS = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯', '🦁', '🐮', '🐷', '🐽', '🐸', '🐵', '🙊', '🙉', '🙊', '🐒', '🐔', '🐧', '🐦', '🐤', '🐣', '🐥', '🦆', '🦅', '🦉', '🦇', '🐺', '🐗', '🐴', '🦄', '🐝', '🐛', '🦋', '🐌', '🐚', '🐞', '🐜', '🕷', '🕸', '🐢', '🐍', '🦎', '🦂', '🦀', '🦑', '🐙', '🦐', '🐠', '🐟', '🐡', '🐬', '🦈', '🐳', '🐋', '🐊', '🐆', '🐅', '🐃', '🐂', '🐄', '🦌', '🐪', '🐫', '🐘', '🦏', '🦍', '🐎', '🐖', '🐐', '🐏', '🐑', '🐕', '🐩', '🐈', '🐓', '🦃', '🕊', '🐇', '🐁', '🐀', '🐿', '🐾', '🐉', '🐲', '🌵', '🎄', '🌲', '🌳', '🌴', '🌱', '🌿', '☘️', '🍀', '🎍', '🎋', '🍃', '🍂', '🍁', '🍄', '🌾', '💐', '🌷', '🌹', '🥀', '🌻', '🌼', '🌸', '🌺', '🌎', '🌍', '🌏', '🌕', '🌖', '🌗', '🌘', '🌑', '🌒', '🌓', '🌔', '🌚', '🌝', '🌞', '🌛', '🌜', '🌙', '💫', '⭐️', '🌟', '✨', '⚡️', '🔥', '💥', '☄️', '☀️', '🌤', '⛅️', '🌥', '🌦', '🌈', '☁️', '🌧', '⛈', '🌩', '🌨', '☃️', '⛄️', '❄️', '🌬', '💨', '🌪', '🌫', '🌊', '💧', '💦', '☔️']
const FOOD_DRINK_EMOJIS = ['🍏', '🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🍈', '🍒', '🍑', '🍍', '🥝', '🥑', '🍅', '🍆', '🥒', '🥕', '🌽', '🌶', '🥔', '🍠', '🌰', '🥜', '🍯', '🥐', '🍞', '🥖', '🧀', '🥚', '🍳', '🥓', '🥞', '🍤', '🍗', '🍖', '🍕', '🌭', '🍔', '🍟', '🥙', '🌮', '🌯', '🥗', '🥘', '🍝', '🍜', '🍲', '🍥', '🍣', '🍱', '🍛', '🍚', '🍙', '🍘', '🍢', '🍡', '🍧', '🍨', '🍦', '🍰', '🎂', '🍮', '🍭', '🍬', '🍫', '🍿', '🍩', '🍪', '🥛', '🍼', '☕️', '🍵', '🍶', '🍺', '🍻', '🥂', '🍷', '🥃', '🍸', '🍹', '🍾', '🥄', '🍴', '🍽']
const ACTIVITY_SPORTS_EMOJIS = ['⚽️', '🏀', '🏈', '⚾️', '🎾', '🏐', '🏉', '🎱', '🏓', '🏸', '🥅', '🏒', '🏑', '🏏', '⛳️', '🏹', '🎣', '🥊', '🥋', '⛸', '🎿', '⛷', '🏂', '🏋️‍♀️', '🏋️', '🤺', '🤼‍♀️', '🤼‍♂️', '🤸‍♀️', '🤸‍♂️', '⛹️‍♀️', '⛹️', '🤾‍♀️', '🤾‍♂️', '🏌️‍♀️', '🏌️', '🏄‍♀️', '🏄', '🏊‍♀️', '🏊', '🤽‍♀️', '🤽‍♂️', '🚣‍♀️', '🚣', '🏇', '🚴‍♀️', '🚴', '🚵‍♀️', '🚵', '🎽', '🏅', '🎖', '🥇', '🥈', '🥉', '🏆', '🏵', '🎗', '🎫', '🎟', '🎪', '🤹‍♀️', '🤹‍♂️', '🎭', '🎨', '🎬', '🎤', '🎧', '🎼', '🎹', '🥁', '🎷', '🎺', '🎸', '🎻', '🎲', '🎯', '🎳', '🎮', '🎰']
const TRAVEL_PLACES_EMOJIS = ['🚗', '🚕', '🚙', '🚌', '🚎', '🏎', '🚓', '🚑', '🚒', '🚐', '🚚', '🚛', '🚜', '🛴', '🚲', '🛵', '🏍', '🚨', '🚔', '🚍', '🚘', '🚖', '🚡', '🚠', '🚟', '🚃', '🚋', '🚞', '🚝', '🚄', '🚅', '🚈', '🚂', '🚆', '🚇', '🚊', '🚉', '🚁', '🛩', '✈️', '🛫', '🛬', '🚀', '🛰', '💺', '🛶', '⛵️', '🛥', '🚤', '🛳', '⛴', '🚢', '⚓️', '🚧', '⛽️', '🚏', '🚦', '🚥', '🗺', '🗿', '🗽', '⛲️', '🗼', '🏰', '🏯', '🏟', '🎡', '🎢', '🎠', '⛱', '🏖', '🏝', '⛰', '🏔', '🗻', '🌋', '🏜', '🏕', '⛺️', '🛤', '🛣', '🏗', '🏭', '🏠', '🏡', '🏘', '🏚', '🏢', '🏬', '🏣', '🏤', '🏥', '🏦', '🏨', '🏪', '🏫', '🏩', '💒', '🏛', '⛪️', '🕌', '🕍', '🕋', '⛩', '🗾', '🎑', '🏞', '🌅', '🌄', '🌠', '🎇', '🎆', '🌇', '🌆', '🏙', '🌃', '🌌', '🌉', '🌁']
const OBJECTS_EMOJIS = ['🆓', '📗', '📕', '⌚️', '📱', '📲', '💻', '⌨️', '🖥', '🖨', '🖱', '🖲', '🕹', '🗜', '💽', '💾', '💿', '📀', '📼', '📷', '📸', '📹', '🎥', '📽', '🎞', '📞', '☎️', '📟', '📠', '📺', '📻', '🎙', '🎚', '🎛', '⏱', '⏲', '⏰', '🕰', '⌛️', '⏳', '📡', '🔋', '🔌', '💡', '🔦', '🕯', '🗑', '🛢', '💸', '💵', '💴', '💶', '💷', '💰', '💳', '💎', '⚖️', '🔧', '🔨', '⚒', '🛠', '⛏', '🔩', '⚙️', '⛓', '🔫', '💣', '🔪', '🗡', '⚔️', '🛡', '🚬', '⚰️', '⚱️', '🏺', '🔮', '📿', '💈', '⚗️', '🔭', '🔬', '🕳', '💊', '💉', '🌡', '🚽', '🚰', '🚿', '🛁', '🛀', '🛎', '🔑', '🗝', '🚪', '🛋', '🛏', '🛌', '🖼', '🛍', '🛒', '🎁', '🎈', '🎏', '🎀', '🎊', '🎉', '🎎', '🏮', '🎐', '✉️', '📩', '📨', '📧', '💌', '📥', '📤', '📦', '🏷', '📪', '📫', '📬', '📭', '📮', '📯', '📜', '📃', '📄', '📑', '📊', '📈', '📉', '🗒', '🗓', '📆', '📅', '📇', '🗃', '🗳', '🗄', '📋', '📁', '📂', '🗂', '🗞', '📰', '📓', '📔', '📒', '📕', '📗', '📘', '📙', '📚', '📖', '🔖', '🔗', '📎', '🖇', '📐', '📏', '📌', '📍', '📌', '🎌', '🏳️', '🏴', '🏁', '🏳️‍🌈', '✂️v 🖊', '🖋', '✒️', '🖌', '🖍', '📝', '✏️', '🔍', '🔎', '🔏', '🔐', '🔒', '🔓']
const SYMBOLS_FLAGS_EMOJIS = ['❤️', '💛', '💚', '💙', '💜', '🖤', '💔', '❣️', '💕', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '☮️', '✝️', '☪️', '🕉', '☸️', '✡️', '🔯', '🕎', '☯️', '☦️', '🛐', '⛎', '♈️', '♉️', '♊️', '♋️', '♌️', '♍️', '♎️', '♏️', '♐️', '♑️', '♒️', '♓️', '🆔', '⚛️', '🉑', '☢️', '☣️', '📴', '📳', '🈶', '🈚️', '🈸', '🈺', '🈷️', '✴️', '🆚', '💮', '🉐', '㊙️', '㊗️', '🈴', '🈵', '🈹', '🈲', '🅰️', '🅱️', '🆎', '🆑', '🅾️', '🆘', '❌', '⭕️', '🛑', '⛔️', '📛', '🚫', '💯', '💢', '♨️', '🚷', '🚯', '🚳', '🚱', '🔞', '📵', '🚭', '❗️', '❕', '❓', '❔', '‼️', '⁉️', '🔅', '🔆', '〽️', '⚠️', '🚸', '🔱', '⚜️', '🔰', '♻️', '✅', '🈯️', '💹', '❇️', '✳️', '❎', '🌐', '💠', 'Ⓜ️', '🌀', '💤', '🏧', '🚾', '♿️', '🅿️', '🈳', '🈂️', '🛂', '🛃', '🛄', '🛅', '🚹', '🚺', '🚼', '🚻', '🚮', '🎦', '📶', '🈁', '🔣', 'ℹ️', '🔤', '🔡', '🔠', '🆖', '🆗', '🆙', '🆒', '🆕', '🆓', '0️⃣', '1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟', '🔢', '#️⃣', '*️⃣', '▶️', '⏸', '⏯', '⏹', '⏺', '⏭', '⏮', '⏩', '⏪', '⏫', '⏬', '◀️', '🔼', '🔽', '➡️', '⬅️', '⬆️', '⬇️', '↗️', '↘️', '↙️', '↖️', '↕️', '↔️', '↪️', '↩️', '⤴️', '⤵️', '🔀', '🔁', '🔂', '🔄', '🔃', '🎵', '🎶', '➕', '➖', '➗', '✖️', '💲', '💱', '™️', '©️', '®️', '〰️', '➰', '➿', '🔚', '🔙', '🔛', '🔝', '✔️', '☑️', '🔘', '⚪️', '⚫️', '🔴', '🔵', '🔺', '🔻', '🔸', '🔹', '🔶', '🔷', '🔳', '🔲', '▪️', '▫️', '◾️', '◽️', '◼️', '◻️', '⬛️', '⬜️', '🔈', '🔇', '🔉', '🔊', '🔔', '🔕', '📣', '📢', '👁‍🗨', '💬', '💭', '🗯', '♠️', '♣️', '♥️', '♦️', '🃏', '🎴', '🀄️', '🕐', '🕑', '🕒', '🕓', '🕔', '🕕', '🕖', '🕗', '🕘', '🕙', '🕚', '🕛', '🕜', '🕝', '🕞', '🕟', '🕠', '🕡', '🕢', '🕣', '🕤', '🕥', '🕦', '🕧', '🏳', '🏴', '🏁', '🚩', '🏳️‍🌈', '🇦🇫', '🇦🇽', '🇦🇱', '🇩🇿', '🇦🇸', '🇦🇩', '🇦🇴', '🇦🇮', '🇦🇶', '🇦🇬', '🇦🇷', '🇦🇲', '🇦🇼', '🇦🇺', '🇦🇹', '🇦🇿', '🇧🇸', '🇧🇭', '🇧🇩', '🇧🇧', '🇧🇾', '🇧🇪', '🇧🇿', '🇧🇯', '🇧🇲', '🇧🇹', '🇧🇴', '🇧🇦', '🇧🇼', '🇧🇷', '🇮🇴', '🇻🇬', '🇧🇳', '🇧🇬', '🇧🇫', '🇧🇮', '🇰🇭', '🇨🇲', '🇨🇦', '🇮🇨', '🇨🇻', '🇧🇶', '🇰🇾', '🇨🇫', '🇹🇩', '🇨🇱', '🇨🇳', '🇨🇽', '🇨🇨', '🇨🇴', '🇰🇲', '🇨🇬', '🇨🇩', '🇨🇰', '🇨🇷', '🇨🇮', '🇭🇷', '🇨🇺', '🇨🇼', '🇨🇾', '🇨🇿', '🇩🇰', '🇩🇯', '🇩🇲', '🇩🇴', '🇪🇨', '🇪🇬', '🇸🇻', '🇬🇶', '🇪🇷', '🇪🇪', '🇪🇹', '🇪🇺', '🇫🇰', '🇫🇴', '🇫🇯', '🇫🇮', '🇫🇷', '🇬🇫', '🇵🇫', '🇹🇫', '🇬🇦', '🇬🇲', '🇬🇪', '🇩🇪', '🇬🇭', '🇬🇮', '🇬🇷', '🇬🇱', '🇬🇩', '🇬🇵', '🇬🇺', '🇬🇹', '🇬🇬', '🇬🇳', '🇬🇼', '🇬🇾', '🇭🇹', '🇭🇳', '🇭🇰', '🇭🇺', '🇮🇸', '🇮🇳', '🇮🇩', '🇮🇷', '🇮🇶', '🇮🇪', '🇮🇲', '🇮🇱', '🇮🇹', '🇯🇲', '🇯🇵', '🎌', '🇯🇪', '🇯🇴', '🇰🇿', '🇰🇪', '🇰🇮', '🇽🇰', '🇰🇼', '🇰🇬', '🇱🇦', '🇱🇻', '🇱🇧', '🇱🇸', '🇱🇷', '🇱🇾', '🇱🇮', '🇱🇹', '🇱🇺', '🇲🇴', '🇲🇰', '🇲🇬', '🇲🇼', '🇲🇾', '🇲🇻', '🇲🇱', '🇲🇹', '🇲🇭', '🇲🇶', '🇲🇷', '🇲🇺', '🇾🇹', '🇲🇽', '🇫🇲', '🇲🇩', '🇲🇨', '🇲🇳', '🇲🇪', '🇲🇸', '🇲🇦', '🇲🇿', '🇲🇲', '🇳🇦', '🇳🇷', '🇳🇵', '🇳🇱', '🇳🇨', '🇳🇿', '🇳🇮', '🇳🇪', '🇳🇬', '🇳🇺', '🇳🇫', '🇰🇵', '🇲🇵', '🇳🇴', '🇴🇲', '🇵🇰', '🇵🇼', '🇵🇸', '🇵🇦', '🇵🇬', '🇵🇾', '🇵🇪', '🇵🇭', '🇵🇳', '🇵🇱', '🇵🇹', '🇵🇷', '🇶🇦', '🇷🇪', '🇷🇴', '🇷🇺', '🇷🇼', '🇼🇸', '🇸🇲', '🇸🇦', '🇸🇳', '🇷🇸', '🇸🇨', '🇸🇱', '🇸🇬', '🇸🇽', '🇸🇰', '🇸🇮', '🇬🇸', '🇸🇧', '🇸🇴', '🇿🇦', '🇰🇷', '🇸🇸', '🇪🇸', '🇱🇰', '🇧🇱', '🇸🇭', '🇰🇳', '🇱🇨', '🇵🇲', '🇻🇨', '🇸🇩', '🇸🇷', '🇸🇿', '🇸🇪', '🇨🇭', '🇸🇾', '🇹🇼', '🇹🇯', '🇹🇿', '🇹🇭', '🇹🇱', '🇹🇬', '🇹🇰', '🇹🇴', '🇹🇹', '🇹🇳', '🇹🇷', '🇹🇲', '🇹🇨', '🇹🇻', '🇻🇮', '🇺🇬', '🇺🇦', '🇦🇪', '🇬🇧', '🇺🇸', '🇺🇾', '🇺🇿', '🇻🇺', '🇻🇦', '🇻🇪', '🇻🇳', '🇼🇫', '🇪🇭', '🇾🇪', '🇿🇲', '🇿🇼']

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = { show: false }
  }

  toggleColorPick (e) {
    this.setState({ show: !this.state.show })
  }

  onEmojiSelect (e) {
    console.log(e.target.innerHTML)
    let emoji = e.target.innerHTML
    //this.props.onColorChange(emoji)
    this.setState({ show: !this.state.show })
  }

  render() {
    const {show} = this.state
    return (
      <Wrapper>
        <ColorPicker onClick={::this.toggleColorPick}>😀</ColorPicker>
        {
          show && (
            <ColorPickerWrapper>
              <ColorWrapper>
                <Title>People</Title>
                {
                  PEOPLE_EMOJIS.map((emoji, index) => (
                    <Emoji
                      className='ld-emoji'
                      key={index}
                      role='presentation'
                      onClick={::this.onEmojiSelect}
                    >{emoji}</Emoji>))
                }
                <Title>Animals & Nature</Title>
                {
                  ANIMALS_NATURE_EMOJIS.map((emoji, index) => (
                    <Emoji
                      className='ld-emoji'
                      key={index}
                      role='presentation'
                      onClick={::this.onEmojiSelect}
                    >{emoji}</Emoji>))
                }
                <Title>Food & Drinks</Title>
                {
                  FOOD_DRINK_EMOJIS.map((emoji, index) => (
                    <Emoji
                      className='ld-emoji'
                      key={index}
                      role='presentation'
                      onClick={::this.onEmojiSelect}
                    >{emoji}</Emoji>))
                }
                <Title>Activity & Sports</Title>
                {
                  ACTIVITY_SPORTS_EMOJIS.map((emoji, index) => (
                    <Emoji
                      className='ld-emoji'
                      key={index}
                      role='presentation'
                      onClick={::this.onEmojiSelect}
                    >{emoji}</Emoji>))
                }
                <Title>Travel & Places</Title>
                {
                  TRAVEL_PLACES_EMOJIS.map((emoji, index) => (
                    <Emoji
                      className='ld-emoji'
                      key={index}
                      role='presentation'
                      onClick={::this.onEmojiSelect}
                    >{emoji}</Emoji>))
                }
                <Title>Objects</Title>
                {
                  OBJECTS_EMOJIS.map((emoji, index) => (
                    <Emoji
                      className='ld-emoji'
                      key={index}
                      role='presentation'
                      onClick={::this.onEmojiSelect}
                    >{emoji}</Emoji>))
                }
                <Title>Symbols & Flags</Title>
                {
                  SYMBOLS_FLAGS_EMOJIS.map((emoji, index) => (
                    <Emoji
                      className='ld-emoji'
                      key={index}
                      role='presentation'
                      onClick={::this.onEmojiSelect}
                    >{emoji}</Emoji>))
                }

              </ColorWrapper>
            </ColorPickerWrapper>
          )
        }
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  margin-right: 1rem;
`

const ColorPickerWrapper = styled.div`
  display: flex;
  width: 30rem;
  background: #fafafa;
  box-shadow: 0 1px 18px 0 rgba(0, 0, 0, 0.3);
  position: absolute;
  z-index: 100;
`

const ColorPicker = styled.div`
  cursor: pointer;
  border: 1px solid #eee;
  padding: 0 0.4rem;
`

const ColorWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0.8rem;
`

const Emoji = styled.span`
  cursor: pointer;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.2rem;
`

const Title = styled.p`
  width: 100%;
`
